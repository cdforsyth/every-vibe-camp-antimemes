// Vibe Camp Antimemes - App Logic

let data = null;
let currentFilter = 'all';
let currentSpeaker = 'all';

// Featured quotes from Vibe Camp speakers
const featuredQuotes = [
  { quote: "In this age, implementing features is not really important. Knowing what to implement is the most important part.", guest: "Naveen Naidu", type: "Cognitive", context: "Building is cheap; deciding what to build is valuable" },
  { quote: "When models get better, you have to delete the code that previously helped them. Most people get stuck at deleting.", guest: "Thariq Shihipar", type: "Psychological", context: "Anthropic insider on the cycle of progress through deletion" },
  { quote: "Somewhere hidden in that model is a senior engineer. If you plan like a senior engineer, you summon them to the table.", guest: "Kevin Rose", type: "Cognitive", context: "Planning quality determines output quality" },
  { quote: "Every app on your Mac is a book. You can open it and start reading it. That's how you learn what excellence looks like.", guest: "Yash Poojary", type: "Implementation", context: "Reverse engineering as studying the masters" },
  { quote: "It's like TikTokification of code - swiping up. That's wrong. That's not how you build technology.", guest: "Yash Poojary", type: "Psychological", context: "Reading every line restores the meditative flow of coding" },
  { quote: "Web interfaces give you 20 minutes of compute. Models can handle hours. That gap is why Claude Code is exploding.", guest: "Brooker Belcourt", type: "Technical", context: "The hidden ceiling on browser-based AI" },
  { quote: "90% of my vibe-coded experiments make things worse, not better. Your own judgment is the first filter.", guest: "Thariq Shihipar", type: "Psychological", context: "Even at Anthropic, most experiments fail" },
  { quote: "I found comfort in discomfort. Once you experience discomfort enough, the discomfort becomes comfortable.", guest: "Paula Dozsa", type: "Psychological", context: "200k MAU app built with zero iOS experience" },
  { quote: "Anyone can copy a point. But they can't copy the vector - the direction you're going in.", guest: "Thariq Shihipar", type: "System", context: "Moat is trajectory, not features" },
  { quote: "This is a project that should have taken engineers six months. I vibe coded it in my spare time and have absolutely no idea how any of the code works.", guest: "Dan Shipper", type: "System", context: "Code comprehension becomes optional for shipping" },
  { quote: "Because we have parity and granularity, even if I haven't built this feature explicitly, the agent just knows how to do it.", guest: "Dan Shipper", type: "Cognitive", context: "Features emerge from tool composition, not explicit coding" },
  { quote: "When I started, I thought I'd need to learn Swift. A year and a half later, I still don't know Swift.", guest: "Paula Dozsa", type: "Identity", context: "The skill you think you need isn't the skill you need" },
  { quote: "If you're not using a feature personally, better to throw it away and start from scratch.", guest: "Naveen Naidu", type: "Psychological", context: "Your own non-use is the definitive signal" },
  { quote: "We have competitors spending millions educating the market. I'm building a product just as good with one person.", guest: "Naveen Naidu", type: "System", context: "Let VC-backed competitors fund market education for you" },
  { quote: "For some reason, when we started AI coding, we just kind of forgot to plan.", guest: "Kieran Klaassen", type: "Cognitive", context: "AI seduced us into skipping what always worked" },
  { quote: "I have aphantasia - I can't visualize in my mind's eye. AI coding unlocked people whose brains work differently.", guest: "Kevin Rose", type: "Identity", context: "AI removes barriers that shouldn't have existed" },
  { quote: "There's something about hearing feedback directly that motivates you. Even Claude summarizing it loses the meta-pattern.", guest: "Thariq Shihipar", type: "Cognitive", context: "Feel can't be outsourced, even to AI" },
  { quote: "LLMs are just very consensus in the way they look at ideas. You have to tell them what a great investor thinks.", guest: "Brooker Belcourt", type: "Cognitive", context: "Without your philosophy, you get average opinions" },
  { quote: "I was unfamiliar with my own codebase - the thing I work on day in and day out. That's not how I want to build.", guest: "Yash Poojary", type: "Identity", context: "AI-generated code can make you a stranger to your own creation" },
  { quote: "The spec mode stuff helped me reduce ambiguity so Opus could run for long periods. But it took 30 minutes of writing specs.", guest: "Thariq Shihipar", type: "Implementation", context: "Upfront spec work enables autonomous agent runs" }
];
let currentQuoteIndex = 0;

// Load data and initialize
async function init() {
  try {
    const response = await fetch('data/insights.json');
    data = await response.json();

    // Update stats (hidden but needed for JS)
    document.getElementById('speaker-count').textContent = data.speakerCount;
    document.getElementById('insight-count').textContent = data.totalInsights;

    // Populate speaker dropdown
    populateSpeakerSelect();

    // Render initial view
    renderSpeakerGrid();

    // Set up event listeners
    setupEventListeners();
  } catch (error) {
    console.error('Failed to load data:', error);
  }
}

function populateSpeakerSelect() {
  const select = document.getElementById('speaker-select');
  const speakers = data.speakers.map(s => s.speaker).sort();

  speakers.forEach(speaker => {
    const option = document.createElement('option');
    option.value = speaker;
    option.textContent = speaker;
    select.appendChild(option);
  });
}

function displayQuote() {
  const q = featuredQuotes[currentQuoteIndex];
  document.getElementById('featured-quote').textContent = q.quote;
  document.getElementById('featured-guest').textContent = '- ' + q.guest;
  document.getElementById('featured-type').textContent = q.type + ' Antimeme';
  document.getElementById('featured-type').className = 'quote-type type-badge ' + q.type.toLowerCase();
  document.getElementById('featured-context').textContent = q.context;
}

function shuffleQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * featuredQuotes.length);
  } while (newIndex === currentQuoteIndex && featuredQuotes.length > 1);
  currentQuoteIndex = newIndex;
  displayQuote();
}

function setupEventListeners() {
  // Type filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderSpeakerGrid();
    });
  });

  // Speaker dropdown
  document.getElementById('speaker-select').addEventListener('change', (e) => {
    currentSpeaker = e.target.value;
    renderSpeakerGrid();
  });

  // Back button
  document.getElementById('back-to-grid').addEventListener('click', showGrid);
}

function getFilteredSpeakers() {
  let speakers = data.speakers;

  // Filter by speaker
  if (currentSpeaker !== 'all') {
    speakers = speakers.filter(s => s.speaker === currentSpeaker);
  }

  // Filter by type
  if (currentFilter !== 'all') {
    speakers = speakers.filter(s =>
      s.insights.some(insight =>
        insight.types.includes(currentFilter)
      )
    );
  }

  return speakers;
}

function getTypeBadgesForSpeaker(speaker) {
  const allTypes = new Set();
  speaker.insights.forEach(insight => {
    insight.types.forEach(type => allTypes.add(type));
  });
  return Array.from(allTypes);
}

function getSubTypesForSpeaker(speaker) {
  const allSubTypes = new Set();
  speaker.insights.forEach(insight => {
    insight.subTypes.forEach(type => allSubTypes.add(type));
  });
  return Array.from(allSubTypes);
}

function renderSpeakerCard(speaker) {
  const subTypes = getSubTypesForSpeaker(speaker);
  const firstInsight = speaker.insights[0];

  return `
    <article class="speaker-card" data-speaker="${speaker.speaker}">
      <h3>${speaker.speaker}</h3>
      <p class="company">${speaker.company}</p>
      <p class="insight-count">${speaker.insightCount} antimemetic insights</p>
      <p class="insight-preview">${firstInsight.title}: ${firstInsight.insight.slice(0, 100)}...</p>
      <div class="type-badges">
        ${subTypes.slice(0, 3).map(type => `<span class="type-badge ${type}">${type}</span>`).join('')}
      </div>
    </article>
  `;
}

function renderSpeakerGrid() {
  const container = document.getElementById('speaker-grid');
  const speakers = getFilteredSpeakers();

  if (speakers.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 2rem; color: var(--text-muted); grid-column: 1 / -1;">
        No speakers match your filters. Try a different combination.
      </div>
    `;
    return;
  }

  container.innerHTML = speakers.map(renderSpeakerCard).join('');

  // Add click handlers
  document.querySelectorAll('.speaker-card').forEach(card => {
    card.addEventListener('click', () => {
      const speakerName = card.dataset.speaker;
      showSpeaker(speakerName);
    });
  });
}

function showSpeaker(speakerName) {
  const speaker = data.speakers.find(s => s.speaker === speakerName);
  if (!speaker) return;

  // Update header
  document.getElementById('speaker-name').textContent = speaker.speaker;
  document.getElementById('speaker-topic').textContent = speaker.topic;

  const youtubeLink = document.getElementById('speaker-youtube');
  youtubeLink.href = speaker.youtube_url;

  // Render insight cards
  const container = document.getElementById('insight-cards');

  // Filter insights if type filter is active
  let insights = speaker.insights;
  if (currentFilter !== 'all') {
    insights = insights.filter(i => i.types.includes(currentFilter));
  }

  container.innerHTML = insights.map((insight, index) => {
    // Build tweet text
    let tweetQuote = insight.quote || insight.title;
    if (tweetQuote.length > 140) {
      const truncated = tweetQuote.slice(0, 200);

      // Priority 1: Sentence boundaries (. ? !)
      const lastPeriod = truncated.lastIndexOf('. ');
      const lastQuestion = truncated.lastIndexOf('? ');
      const lastExclaim = truncated.lastIndexOf('! ');
      const sentenceEnd = Math.max(lastPeriod, lastQuestion, lastExclaim);

      if (sentenceEnd > 60) {
        tweetQuote = tweetQuote.slice(0, sentenceEnd + 1);
      } else {
        // Priority 2: Natural pause points
        const lastComma = truncated.lastIndexOf(', ');
        const lastSemi = truncated.lastIndexOf('; ');
        const lastEmDash = truncated.lastIndexOf('-');
        const lastColon = truncated.lastIndexOf(': ');
        const pauseEnd = Math.max(lastComma, lastSemi, lastEmDash, lastColon);

        if (pauseEnd > 80) {
          tweetQuote = tweetQuote.slice(0, pauseEnd) + '...';
        } else {
          // Priority 3: Word boundary
          tweetQuote = tweetQuote.slice(0, 140);
          const lastSpace = tweetQuote.lastIndexOf(' ');
          if (lastSpace > 80) {
            tweetQuote = tweetQuote.slice(0, lastSpace) + '...';
          } else {
            tweetQuote = tweetQuote + '...';
          }
        }
      }
    }
    const tweetText = `"${tweetQuote}" - ${speaker.speaker} at Vibe Code Camp | via @antimemetic_`;
    const tweetIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    return `
      <article class="insight-card">
        <div class="insight-header">
          <h4>${insight.title}</h4>
        </div>
        <p class="insight-text">${insight.insight}</p>
        <div class="type-badges">
          ${insight.subTypes.map(type => `<span class="type-badge ${type}">${type}</span>`).join('')}
        </div>
        ${insight.whyResists ? `
          <div class="why-resists">
            <p class="why-resists-label">Why this resists spreading</p>
            <p class="why-resists-text">${insight.whyResists}</p>
          </div>
        ` : ''}
        ${insight.quote ? `
          <blockquote class="quote">${insight.quote}</blockquote>
        ` : ''}
        <a href="${tweetIntent}" target="_blank" class="tweet-btn">Share on X</a>
      </article>
    `;
  }).join('');

  // Show speaker view, hide grid
  document.getElementById('speaker-grid').classList.add('hidden');
  document.getElementById('speaker-view').classList.remove('hidden');

  // Scroll to the speaker view
  document.getElementById('speaker-view').scrollIntoView({ behavior: 'smooth' });
}

function showGrid() {
  document.getElementById('speaker-view').classList.add('hidden');
  document.getElementById('speaker-grid').classList.remove('hidden');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  // Display quote immediately (doesn't depend on data)
  displayQuote();
  document.getElementById('shuffle-quote').addEventListener('click', shuffleQuote);

  // Then load data for speakers
  init();
});
