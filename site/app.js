// Every Vibe Camp Antimemes - v3 Redesign

let data = null;
let currentFilter = 'all';
let currentSpeaker = 'all';
let currentQuote = 0;
let autoplayInterval = null;

// Featured quotes for carousel (curated from high-scoring insights)
const featuredQuotes = [
  { quote: "In this age, implementing features is not really important. Knowing what to implement is the most important part.", speaker: "Naveen Naidu", type: "Cognitive" },
  { quote: "When models get better, you have to delete the code that previously helped them. Most people get stuck at deleting.", speaker: "Thariq Shihipar", type: "Cognitive" },
  { quote: "Somewhere hidden in that model is a senior engineer. If you plan like a senior engineer, you summon them to the table.", speaker: "Kevin Rose", type: "Cognitive" },
  { quote: "Every app on your Mac is a book. You can open it and start reading it. That's how you learn what excellence looks like.", speaker: "Yash Poojary", type: "Implementation" },
  { quote: "I found comfort in discomfort. Once you experience discomfort enough, the discomfort becomes comfortable.", speaker: "Paula Dozsa", type: "Social" },
  { quote: "Anyone can copy a point. But they can't copy the vector - the direction you're going in.", speaker: "Thariq Shihipar", type: "System" },
  { quote: "This is a project that should have taken engineers six months. I vibe coded it in my spare time and have absolutely no idea how any of the code works.", speaker: "Dan Shipper", type: "System" },
  { quote: "When I started, I thought I'd need to learn Swift. A year and a half later, I still don't know Swift.", speaker: "Paula Dozsa", type: "Social" },
  { quote: "For some reason, when we started AI coding, we just kind of forgot to plan.", speaker: "Kieran Klaassen", type: "Cognitive" }
];

// Initialize
async function init() {
  try {
    const response = await fetch('data/insights.json');
    data = await response.json();

    // Initialize components
    initQuoteCarousel();
    populateSpeakerSelect();
    renderSpeakerGrid();
    setupEventListeners();

  } catch (error) {
    console.error('Failed to load data:', error);
  }
}

// Quote Carousel
function initQuoteCarousel() {
  const container = document.getElementById('quote-container');
  const dotsContainer = document.getElementById('quote-dots');

  // Create slides
  container.innerHTML = featuredQuotes.map((q, i) => `
    <div class="quote-slide${i === 0 ? ' active' : ''}" data-index="${i}">
      <blockquote>${q.quote}</blockquote>
      <div class="quote-attribution">
        <cite class="quote-author">${q.speaker}</cite>
        <span class="quote-type">${q.type}</span>
      </div>
    </div>
  `).join('');

  // Create dots
  dotsContainer.innerHTML = featuredQuotes.map((_, i) => `
    <button class="quote-dot${i === 0 ? ' active' : ''}" data-index="${i}"></button>
  `).join('');

  // Start autoplay
  startAutoplay();
}

function showQuote(index) {
  currentQuote = index;
  document.querySelectorAll('.quote-slide').forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  document.querySelectorAll('.quote-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextQuote() {
  showQuote((currentQuote + 1) % featuredQuotes.length);
}

function prevQuote() {
  showQuote((currentQuote - 1 + featuredQuotes.length) % featuredQuotes.length);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextQuote, 6000);
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

// Speaker Select
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

// Speaker Grid
function renderSpeakerGrid() {
  const grid = document.getElementById('speaker-grid');

  // Filter speakers
  let filtered = data.speakers;

  if (currentFilter !== 'all') {
    filtered = filtered.filter(speaker => {
      return speaker.insights && speaker.insights.some(insight => {
        const types = insight.types || [];
        return types.some(t => mapTypeToFilter(t) === currentFilter);
      });
    });
  }

  if (currentSpeaker !== 'all') {
    filtered = filtered.filter(speaker => speaker.speaker === currentSpeaker);
  }

  // Render cards
  grid.innerHTML = filtered.map(speaker => {
    const types = getSpeakerTypes(speaker);
    const firstInsight = speaker.insights?.[0];
    const description = firstInsight?.title || speaker.topic || '';

    return `
      <article class="card" data-speaker="${speaker.speaker}">
        <div class="card-meta">
          <span>${speaker.company}</span>
        </div>
        <h3 class="card-title">${speaker.speaker}</h3>
        <p class="card-subtitle">${speaker.insightCount || speaker.insights?.length || 0} insights</p>
        <p class="card-description">${description}</p>
        <div class="card-badges">
          ${types.slice(0, 2).map(t => `<span class="badge badge-${t}">${t}</span>`).join('')}
        </div>
      </article>
    `;
  }).join('');

  // Add click listeners to cards
  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const speakerName = card.dataset.speaker;
      showSpeakerDetail(speakerName);
    });
  });
}

function getSpeakerTypes(speaker) {
  const types = new Set();
  if (speaker.insights) {
    speaker.insights.forEach(insight => {
      (insight.types || []).forEach(t => {
        types.add(mapTypeToFilter(t));
      });
    });
  }
  return Array.from(types);
}

function mapTypeToFilter(type) {
  const typeMap = {
    'cognitive': 'cognitive',
    'epistemic': 'cognitive',
    'psychological': 'cognitive',
    'social': 'social',
    'organizational': 'social',
    'identity': 'social',
    'professional': 'social',
    'status': 'social',
    'role': 'social',
    'career': 'social',
    'implementation': 'implementation',
    'temporal': 'implementation',
    'process': 'implementation',
    'technical': 'implementation',
    'practical': 'implementation',
    'planning': 'implementation',
    'decision': 'implementation',
    'system': 'system',
    'industry': 'system',
    'market': 'system',
    'business': 'system',
    'structural': 'system',
    'narrative': 'system'
  };
  return typeMap[type?.toLowerCase()] || 'cognitive';
}

// Speaker Detail View
function showSpeakerDetail(speakerName) {
  const speaker = data.speakers.find(s => s.speaker === speakerName);

  if (!speaker) return;

  // Hide grid sections, show detail
  document.querySelector('.hero').classList.add('hidden');
  document.querySelector('.quote-section').classList.add('hidden');
  document.querySelector('.filter-bar').classList.add('hidden');
  document.querySelector('.speakers-section').classList.add('hidden');
  document.getElementById('speaker-detail').classList.remove('hidden');

  // Render header
  document.getElementById('speaker-header').innerHTML = `
    <h2>${speaker.speaker}</h2>
    <p class="speaker-company">${speaker.company}</p>
    <p class="speaker-topic">${speaker.topic}</p>
    <a href="${speaker.youtube_url}" target="_blank" rel="noopener" class="youtube-link">
      Watch on YouTube (${speaker.timestamp})
      <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
      </svg>
    </a>
  `;

  // Filter insights if type filter is active
  let insights = speaker.insights;
  if (currentFilter !== 'all') {
    insights = insights.filter(insight => {
      return (insight.types || []).some(t => mapTypeToFilter(t) === currentFilter);
    });
  }

  // Render insights
  document.getElementById('insight-list').innerHTML = insights.map(insight => `
    <article class="insight-card">
      <h3>${insight.title}</h3>
      <p class="insight-text">${insight.insight}</p>
      ${insight.quote ? `<p class="insight-quote">"${insight.quote}"</p>` : ''}
      ${insight.whyResists ? `<p class="insight-why"><strong>Why it resists spreading:</strong> ${insight.whyResists}</p>` : ''}
      <div class="insight-badges">
        ${(insight.types || []).map(t => `<span class="badge badge-${mapTypeToFilter(t)}">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');

  // Scroll to top
  window.scrollTo(0, 0);
}

function showGrid() {
  document.querySelector('.hero').classList.remove('hidden');
  document.querySelector('.quote-section').classList.remove('hidden');
  document.querySelector('.filter-bar').classList.remove('hidden');
  document.querySelector('.speakers-section').classList.remove('hidden');
  document.getElementById('speaker-detail').classList.add('hidden');
}

// Event Listeners
function setupEventListeners() {
  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });

  // Quote carousel nav
  document.getElementById('quote-prev').addEventListener('click', () => {
    prevQuote();
    resetAutoplay();
  });
  document.getElementById('quote-next').addEventListener('click', () => {
    nextQuote();
    resetAutoplay();
  });

  // Quote dots
  document.getElementById('quote-dots').addEventListener('click', (e) => {
    if (e.target.classList.contains('quote-dot')) {
      showQuote(parseInt(e.target.dataset.index));
      resetAutoplay();
    }
  });

  // Pause autoplay on hover
  document.querySelector('.quote-section').addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  document.querySelector('.quote-section').addEventListener('mouseleave', () => {
    startAutoplay();
  });

  // Filter pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.dataset.filter;
      renderSpeakerGrid();
    });
  });

  // Speaker dropdown
  document.getElementById('speaker-select').addEventListener('change', (e) => {
    currentSpeaker = e.target.value;
    renderSpeakerGrid();
  });

  // Back button
  document.getElementById('back-btn').addEventListener('click', showGrid);
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
