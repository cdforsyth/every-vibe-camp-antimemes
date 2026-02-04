#!/usr/bin/env node

/**
 * Convert markdown insight files to JSON for the web app.
 * Extracts top 3 insights per speaker sorted by diagnostic score.
 */

const fs = require('fs');
const path = require('path');

const PROJECT_DIR = path.join(__dirname, '..');
const INSIGHTS_DIR = path.join(PROJECT_DIR, 'data', 'insights');
const SPEAKERS_FILE = path.join(PROJECT_DIR, 'data', 'speakers.json');
const OUTPUT_FILE = path.join(PROJECT_DIR, 'site', 'data', 'insights.json');

function parseInsightFile(content, filename, speakerData) {
  // Extract source info from header
  const topicMatch = content.match(/\*\*Topic:\*\* (.+)/);
  const topic = topicMatch ? topicMatch[1] : speakerData?.topic || '';

  // Find Stage 2 section (where detailed insights live)
  const stage2Start = content.indexOf('## Stage 2:');
  if (stage2Start === -1) return null;

  const stage2Content = content.slice(stage2Start);

  // Split by insight headers (### 1., ### 2., etc.)
  const insightBlocks = stage2Content.split(/\n### \d+\.\s+/).slice(1);

  const insights = [];

  for (const block of insightBlocks) {
    const lines = block.split('\n');

    // Get title from first line
    const title = lines[0].trim();
    if (!title) continue;

    // Extract INSIGHT text
    const insightMatch = block.match(/\*\*INSIGHT:\*\*\s*([^\n]+(?:\n(?!\*\*)[^\n]+)*)/);
    const insightText = insightMatch ? insightMatch[1].trim() : '';

    // Extract CATEGORY (Antimeme / Workflow / Tactic)
    const categoryMatch = block.match(/\*\*CATEGORY:\*\*\s*([^\n]+)/);
    const category = categoryMatch ? categoryMatch[1].trim().toLowerCase() : 'antimeme';

    // Extract DIAGNOSTIC VALUE
    const diagnosticMatch = block.match(/\*\*DIAGNOSTIC VALUE:\*\*\s*(\d+)/);
    const diagnosticScore = diagnosticMatch ? parseInt(diagnosticMatch[1]) : 0;

    // Extract RESISTANCE TYPE for antimeme classification
    const resistanceMatch = block.match(/\*\*RESISTANCE TYPE:\*\*\s*([^\n]+)/);
    const resistanceType = resistanceMatch ? resistanceMatch[1].trim() : '';

    // Extract ALL antimeme types from the block
    const antimemeTypes = [];
    const antimemeTypeRegex = /\*\*([A-Za-z]+) Antimeme:\*\*/g;
    let typeMatch;
    while ((typeMatch = antimemeTypeRegex.exec(block)) !== null) {
      antimemeTypes.push(typeMatch[1].toLowerCase());
    }

    // Map sub-types to 4 core categories
    const typeMapping = {
      // Cognitive category
      cognitive: 'cognitive',
      epistemic: 'cognitive',
      psychological: 'cognitive',

      // Social category
      social: 'social',
      organizational: 'social',
      identity: 'social',
      professional: 'social',
      status: 'social',
      role: 'social',
      career: 'social',

      // Implementation category
      implementation: 'implementation',
      temporal: 'implementation',
      process: 'implementation',
      technical: 'implementation',
      practical: 'implementation',
      planning: 'implementation',
      decision: 'implementation',

      // System category
      system: 'system',
      industry: 'system',
      market: 'system',
      business: 'system',
      structural: 'system',
      narrative: 'system'
    };

    const subTypes = [...new Set(antimemeTypes)]; // unique sub-types
    const coreTypes = [...new Set(
      antimemeTypes.map(t => typeMapping[t] || 'cognitive')
    )]; // unique core types

    // Extract "Why it resists spreading" section
    const resistsMatch = block.match(/\*\*Why it resists spreading:\*\*\s*([\s\S]*?)(?=\n\*\*What's lost|$)/);
    let whyResists = '';
    if (resistsMatch) {
      whyResists = resistsMatch[1]
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/^-\s*/, '').trim())
        .join(' ');
    }

    // Extract verification quote
    const quoteMatch = block.match(/\*\*Verification:\*\*\s*>\s*"?([^"]+)"?/s);
    let quote = '';
    if (quoteMatch) {
      quote = quoteMatch[1].trim().replace(/\n/g, ' ').replace(/\s+/g, ' ');
    }

    if (insightText && diagnosticScore > 0) {
      insights.push({
        title,
        insight: insightText,
        category, // antimeme, workflow, or tactic
        diagnosticScore,
        types: coreTypes.length > 0 ? coreTypes : ['cognitive'],
        subTypes: subTypes.length > 0 ? subTypes : ['cognitive'],
        whyResists,
        quote
      });
    }
  }

  // Sort by diagnostic score and take top 3
  insights.sort((a, b) => b.diagnosticScore - a.diagnosticScore);
  const top3 = insights.slice(0, 3);

  return {
    speaker: speakerData?.speaker || filename.replace('.md', ''),
    company: speakerData?.company || '',
    topic: topic,
    youtube_url: speakerData?.youtube_url || '',
    timestamp: speakerData?.timestamp || '',
    insightCount: top3.length,
    insights: top3
  };
}

function main() {
  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Load speaker metadata
  const speakers = JSON.parse(fs.readFileSync(SPEAKERS_FILE, 'utf-8'));
  const speakerMap = {};
  speakers.forEach(s => {
    speakerMap[s.slug] = s;
  });

  // Check if insights directory exists
  if (!fs.existsSync(INSIGHTS_DIR)) {
    console.log('No insights directory found. Run extraction first.');
    return;
  }

  // Read all insight files
  const files = fs.readdirSync(INSIGHTS_DIR).filter(f => f.endsWith('.md'));

  if (files.length === 0) {
    console.log('No insight files found. Run extraction first.');
    return;
  }

  const speakerInsights = [];
  let totalInsights = 0;

  for (const file of files) {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(path.join(INSIGHTS_DIR, file), 'utf-8');
    const speakerData = speakerMap[slug];
    const parsed = parseInsightFile(content, file, speakerData);

    if (parsed && parsed.insights.length > 0) {
      speakerInsights.push(parsed);
      totalInsights += parsed.insights.length;
    }
  }

  // Sort by timestamp (order of appearance in the stream)
  speakerInsights.sort((a, b) => {
    const aData = speakerMap[a.speaker.toLowerCase().replace(/ /g, '-')] || {};
    const bData = speakerMap[b.speaker.toLowerCase().replace(/ /g, '-')] || {};
    return (aData.timestamp_seconds || 0) - (bData.timestamp_seconds || 0);
  });

  const output = {
    generated: new Date().toISOString(),
    source: "Every's Vibe Code Camp (January 2026)",
    youtube_url: "https://www.youtube.com/watch?v=5YBjll9XJlw",
    speakerCount: speakerInsights.length,
    totalInsights,
    speakers: speakerInsights
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));

  console.log(`Converted ${speakerInsights.length} speakers with ${totalInsights} insights`);
  console.log(`Output: ${OUTPUT_FILE}`);
}

main();
