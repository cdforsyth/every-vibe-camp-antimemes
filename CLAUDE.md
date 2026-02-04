# Every Vibe Camp Antimemes - Layer 2 Project Context

> Project-specific context for extracting antimemetic insights from Every's Vibe Code Camp transcript.

**Created**: 2026-01-23

---

## What This Is

A tool that applies the antimeme lens to Every's Vibe Code Camp - an 8-hour livestream where expert builders demonstrated how they actually build software with AI. Surfaces counterintuitive insights about AI-assisted development that resist spreading despite their value.

**Competition**: Every is giving a free year to their favorite build using this transcript. Deadline: 1/30.

**Differentiation**: Other tools might summarize or make searchable. We filter for *surprising* insights - the stuff only 1-5% of viewers would internalize.

---

## Source Data

**Repository**: https://github.com/EveryInc/vibe-code-camp

- Single 8-hour transcript (567KB)
- 17 speaker sessions
- Already annotated with timestamps and speaker headers
- YouTube: https://www.youtube.com/watch?v=5YBjll9XJlw

**Speakers:**
1. Dan Shipper (Every) - Proof/Anecdote demo
2. Ben Tossell (Ben's Bites) - 30 agents autonomously
3. Ashe Magalhaes (Hearth AI) - Personal AI suite
4. Ryan Carson - Infinite loop agent
5. Natalia Quintero & Nityesh Agarwal (Every) - Consulting workflows
6. Katie Parrott (Every) - Claude for writing
7. Nat Eliason - Clawdbot 24/7 agent
8. Tina He (Pace Capital) - Vibe coding as meditation
9. Paula Dozsa (Portola) - 200k MAU iOS app
10. CJ Hess (Tenex) - Context7 MCP
11. Logan Kilpatrick & Ammaar Reshi (Google) - Google AI Studios
12. Geoffrey Litt (Notion) - Malleable software
13. Kevin Rose & Kieran Klaassen - Compound Engineering
14. Thariq Shihipar (Anthropic) - Inside Claude Code
15. Naveen Naidu (Every/Monologue) - iOS voice app
16. Yash Poojary (Every/Sparkle) - Reverse engineering apps
17. Brooker Belcourt (Every) - Financial research

---

## Current State (2026-01-23)

**Status:** Project setup complete, ready for extraction

**Completed:**
- [x] Downloaded and split transcript into 17 speaker files
- [x] Created speakers.json with metadata
- [x] Adapted extraction prompt for vibe coding context
- [x] Created processing loop script
- [x] Created convert script for JSON output

**Next:**
- [ ] Run extraction loop (17 speakers)
- [ ] Convert to JSON
- [ ] Build static site
- [ ] Deploy to Netlify
- [ ] Custom domain (vibecode.antimeme.co?)
- [ ] Submit to Every competition by 1/30

---

## Tech Stack

- **Source**: GitHub repo transcript (EveryInc/vibe-code-camp)
- **Processing**: Claude Code CLI loop (covered by Claude Max)
- **Storage**: Static JSON (no database)
- **Frontend**: Vanilla HTML/CSS/JS
- **Hosting**: Netlify

---

## Project Structure

```
/Projects/Every-Vibe-Camp/
├── CLAUDE.md              # This file (project context)
│
├── /scripts/
│   ├── split-transcript.js  # Split full transcript into speaker files
│   ├── loop.sh              # Processing loop for transcript analysis
│   └── convert-insights.js  # Markdown → JSON converter
│
├── /prompts/
│   └── process-transcript.md  # Instructions for Claude extraction
│
├── /data/
│   ├── vibe-code-camp-transcript.txt  # Full original transcript
│   ├── speakers.json        # Speaker metadata with processing status
│   ├── progress.json        # Tracks overall progress
│   ├── /transcripts/        # Individual speaker transcripts
│   │   ├── dan-shipper.txt
│   │   ├── ben-tossell.txt
│   │   └── ... (17 total)
│   └── /insights/           # Markdown files (one per speaker)
│       └── ... (generated during extraction)
│
└── /site/                   # Static web app (to be built)
    ├── index.html
    ├── style.css
    ├── app.js
    └── /data/
        └── insights.json    # Generated from markdown
```

---

## Workflow

**1. Process transcripts:**
```bash
cd "/Users/calum/Library/Mobile Documents/iCloud~md~obsidian/Documents/Claude Projects/Projects/Every-Vibe-Camp"
./scripts/loop.sh 17  # Process all 17 speakers
```

**2. Convert to JSON:**
```bash
node scripts/convert-insights.js
```

**3. Preview site locally:**
```bash
cd site && python3 -m http.server 8888
# Open http://localhost:8888
```

---

## Antimeme Extraction Framework

Same 4-type taxonomy as Lenny project:

| Filter | Includes |
|--------|----------|
| Cognitive | cognitive, epistemic, psychological |
| Social | social, organizational, identity, professional |
| Implementation | implementation, temporal, process, technical |
| System | system, industry, market, business, structural |

---

## Site Design Notes

**Inspiration**: lenny.antimeme.co

**Adaptations for this project:**
- Single source event (not 299 episodes)
- Speaker cards instead of episode cards
- YouTube timestamp links to specific moments
- Every-inspired branding? Or keep antimeme.co consistent?
- Quote carousel with best insights
- Type filters

---

## Reference

**Lenny project files** (for patterns to follow):
- `/Projects/Lenny-Antimemes/CLAUDE.md`
- `/Projects/Lenny-Antimemes/site/` (HTML/CSS/JS)
