#!/usr/bin/env node

/**
 * Split the full Vibe Code Camp transcript into individual speaker files.
 */

const fs = require('fs');
const path = require('path');

const PROJECT_DIR = path.join(__dirname, '..');
const TRANSCRIPT_FILE = path.join(PROJECT_DIR, 'data', 'vibe-code-camp-transcript.txt');
const SPEAKERS_FILE = path.join(PROJECT_DIR, 'data', 'speakers.json');
const TRANSCRIPTS_DIR = path.join(PROJECT_DIR, 'data', 'transcripts');

// Read files
const transcript = fs.readFileSync(TRANSCRIPT_FILE, 'utf-8');
const speakers = JSON.parse(fs.readFileSync(SPEAKERS_FILE, 'utf-8'));
const lines = transcript.split('\n');

// Ensure output directory exists
if (!fs.existsSync(TRANSCRIPTS_DIR)) {
  fs.mkdirSync(TRANSCRIPTS_DIR, { recursive: true });
}

// Process each speaker
for (let i = 0; i < speakers.length; i++) {
  const speaker = speakers[i];
  const startLine = speaker.line_start - 1; // Convert to 0-indexed

  // End line is either the next speaker's start or end of file
  let endLine;
  if (i < speakers.length - 1) {
    endLine = speakers[i + 1].line_start - 1;
  } else {
    // For last speaker, find the closing remarks line
    const closingIdx = lines.findIndex(l => l.includes('=== CLOSING REMARKS ==='));
    endLine = closingIdx > 0 ? closingIdx : lines.length;
  }

  // Extract the section
  const section = lines.slice(startLine, endLine).join('\n');

  // Create the file with metadata header
  const content = `# ${speaker.speaker} - ${speaker.topic}

**Company:** ${speaker.company}
**Timestamp:** ${speaker.timestamp}
**YouTube:** ${speaker.youtube_url}

---

${section}
`;

  const outputPath = path.join(TRANSCRIPTS_DIR, `${speaker.slug}.txt`);
  fs.writeFileSync(outputPath, content);

  console.log(`✓ ${speaker.slug}.txt (${endLine - startLine} lines)`);
}

console.log(`\nSplit into ${speakers.length} speaker files in ${TRANSCRIPTS_DIR}`);
