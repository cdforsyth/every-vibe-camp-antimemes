# Antimeme Analysis: Logan Kilpatrick & Ammaar Reshi on Vibe Code Camp

**Topic:** The latest from Google AI Studios
**Company:** Google
**YouTube:** https://www.youtube.com/watch?v=5YBjll9XJlw&t=16301s
**Analyzed:** 2026-01-24

---

## Stage 1: Popular vs. Rare Concepts

### Popular Takeaways (80-90% of viewers would mention)

1. **AI Studio for prototyping** - Google's team barely uses Figma anymore; they prototype directly in AI Studio
2. **Figma → AI Studio workflow** - Screenshot Figma design, paste into AI Studio, iterate live
3. **One-shot multiplayer app** - Built a FigJam clone from a single screenshot and "make me this app" prompt
4. **Antigravity integration** - One-click export from AI Studio to full IDE coming soon
5. **Figma plugin for JSON export** - Plugin extracts exact styles, typography, spacing as JSON for precise recreation
6. **Google ecosystem integrations** - One-click connect to Google Workspace, Calendar, Gemini
7. **Double-digit Googler adoption** - Significant percentage of Google employees using AI Studio for prototyping
8. **Non-technical teams building in 2026** - This is the year non-technical teams actually start building with AI

### Rare Insights (1-5% would notice) - Three Lenses:

1. [ANTIMEME] **Tool Calling Is the Holy Grail**
2. [ANTIMEME] **Slop Is What's In Distribution**
3. [WORKFLOW] **Loom Is the New Test Suite**
4. [ANTIMEME] **Hour Cost vs. Month Cost Unlocks Creativity**
5. [TACTIC] **Ask for the Feature You Didn't Design**
6. [WORKFLOW] **Walkthrough Prompts for Self-Documentation**
7. [ANTIMEME] **"Make Me This App" Is a Top-Tier Prompt**

---

## Stage 2: Antimemetic Properties Analysis

### 1. Tool Calling Is the Holy Grail

**INSIGHT:** The breakthrough that enabled agentic coding isn't smarter reasoning - it's better tool calling over long-running tasks. Every user request triggers many subsequent micro-decisions (search files, edit code, check docs) that require reliable tool calling.

**CATEGORY:** Antimeme

**CLASSIFICATION:** Diagnostic

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Missing
- Recognition vs. vertigo? Recognition

**SCORES:**
- Actionability: 3
- Specificity: 5
- Surprise: 5
- Shareability: 5

**RESISTANCE TYPE:** Cognitive / Technical

**DIAGNOSTIC VALUE:** 9

**Antimemetic Properties:**
- **Cognitive Antimeme:** "Better reasoning" is the intuitive explanation for model improvements
- **Technical Antimeme:** Tool calling is infrastructure - invisible when working, blamed when failing

**Why it resists spreading:**
- "The models got smarter" is an easier narrative
- Tool calling is technical plumbing, not a sexy capability
- The micro-decisions are hidden by good UI
- "On-the-fly context engineering" isn't a marketing phrase
- Users experience results, not the mechanism

**What's lost by accepting it:**
- The simple "models just got smarter" explanation
- The focus on reasoning capabilities as the bottleneck

**Verification:**
> "Tool calling is the basket of fruits that bears all the gifts. As you make tool calling better, specifically over long running tasks, it's the holy grail."

---

### 2. Slop Is What's In Distribution

**INSIGHT:** Slop isn't about quality per se - it's about how far your output is from the model's default. The most in-distribution outputs are slop; you escape slop by pushing the model to do things it can barely do. This means the definition of slop is transitory.

**CATEGORY:** Antimeme

**CLASSIFICATION:** Diagnostic

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Ignoring
- Recognition vs. vertigo? Vertigo

**SCORES:**
- Actionability: 4
- Specificity: 4
- Surprise: 5
- Shareability: 5

**RESISTANCE TYPE:** Cognitive / Social

**DIAGNOSTIC VALUE:** 9

**Antimemetic Properties:**
- **Cognitive Antimeme:** We think of slop as a fixed quality threshold, not a moving distribution
- **Social Antimeme:** Calling something "slop" implies objective badness, not relative positioning

**Why it resists spreading:**
- "Slop" feels like a permanent category
- The idea that today's quality becomes tomorrow's slop is uncomfortable
- It implies endless treadmill of differentiation
- The statistical framing (distribution) is less intuitive than quality framing
- It makes craft feel more arbitrary

**What's lost by accepting it:**
- The comfort of achieving "non-slop" permanently
- Simple quality standards that don't shift
- The idea that good taste is stable

**Verification:**
> "Things that are most in distribution for the model I would consider to most be slop... the goal is you get out of that by pushing on the edges of getting the model to do things that it can kind of barely do."

---

### 3. Loom Is the New Test Suite

**INSIGHT:** For vibe-coded projects, human or AI testing via screen recordings replaces traditional test suites. When someone sends a PR, you want to see a Loom of them using the feature, not a code diff.

**CATEGORY:** Workflow

**CLASSIFICATION:** Diagnostic

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Missing
- Recognition vs. vertigo? Recognition

**SCORES:**
- Actionability: 5
- Specificity: 5
- Surprise: 4
- Shareability: 4

**RESISTANCE TYPE:** Social / Implementation

**DIAGNOSTIC VALUE:** 8

**Antimemetic Properties:**
- **Social Antimeme:** "Tests" mean code; suggesting video replacement sounds unserious
- **Implementation Antimeme:** Requires changing PR review culture and tooling

**Why it resists spreading:**
- Engineering culture values automated tests
- "Show me a video" sounds like QA, not engineering
- Loom integration isn't standard in code review flows
- The code diff is sacred in PR culture
- It feels like regression from proper engineering

**What's lost by accepting it:**
- The formality of test coverage metrics
- The comfort of "tests pass, ship it"
- The separation of QA and engineering

**Verification:**
> "When someone sends a PR for one of my Vibe Coded projects, I just want to see a loom of them going through the feature a few different times rather than a code diff, honestly."

---

### 4. Hour Cost vs. Month Cost Unlocks Creativity

**INSIGHT:** Teams become more creative when exploring an idea costs an hour instead of a month. The AI Studio team is "basically more creative now" because riffing on random ideas is cheap. The cost reduction changes what gets explored, not just what gets built.

**CATEGORY:** Antimeme

**CLASSIFICATION:** Diagnostic

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Missing
- Recognition vs. vertigo? Recognition

**SCORES:**
- Actionability: 4
- Specificity: 5
- Surprise: 4
- Shareability: 4

**RESISTANCE TYPE:** Organizational / Cognitive

**DIAGNOSTIC VALUE:** 8

**Antimemetic Properties:**
- **Organizational Antimeme:** "Creativity" is seen as a talent, not a function of cost structure
- **Cognitive Antimeme:** We underestimate how much cost constrains exploration

**Why it resists spreading:**
- Companies talk about "fostering creativity" as culture, not economics
- The connection between exploration cost and creative output isn't intuitive
- "We're more creative now" is hard to measure
- The month→hour compression is invisible to outsiders
- It sounds like bragging, not insight

**What's lost by accepting it:**
- The mystique of "creative teams"
- The assumption that creativity is fixed per person
- The idea that process improvements are about efficiency, not creativity

**Verification:**
> "The team is basically like more creative now because we can just riff on random ideas and the cost of doing that is not like a month or a week, it's like an hour."

---

### 5. Ask for the Feature You Didn't Design

**INSIGHT:** When prototyping in AI Studio, ask Claude to design features you haven't designed yet - like "what does the new user experience look like?" The AI fills in the gaps faster than going back to Figma.

**CATEGORY:** Tactic

**CLASSIFICATION:** Diagnostic

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Missing
- Recognition vs. vertigo? Recognition

**SCORES:**
- Actionability: 5
- Specificity: 5
- Surprise: 4
- Shareability: 4

**RESISTANCE TYPE:** Implementation / Process

**DIAGNOSTIC VALUE:** 7

**Antimemetic Properties:**
- **Process Antimeme:** The design→build sequence is deeply ingrained
- **Implementation Antimeme:** Feels risky to let AI design without human spec

**Why it resists spreading:**
- "Design first, then build" is the standard workflow
- Designers may feel threatened by AI filling gaps
- The quality of AI-designed features is uncertain
- It requires trust that the AI will make reasonable decisions
- Process documentation typically shows linear flows

**What's lost by accepting it:**
- The comfort of fully-specified designs
- Designer control over every detail
- The linear design→build workflow

**Verification:**
> "I just asked, what does the new user experience look like? Because I haven't designed that yet. And it came up with something like that."

---

### 6. Walkthrough Prompts for Self-Documentation

**INSIGHT:** Add "create a walkthrough of the feature" to your prompts, and the AI will click through the UI and show you how it works. This solves the problem of not knowing how your own vibe-coded app works.

**CATEGORY:** Workflow

**CLASSIFICATION:** Diagnostic

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Missing
- Recognition vs. vertigo? Recognition

**SCORES:**
- Actionability: 5
- Specificity: 5
- Surprise: 4
- Shareability: 3

**RESISTANCE TYPE:** Implementation

**DIAGNOSTIC VALUE:** 6

**Antimemetic Properties:**
- **Implementation Antimeme:** Most people don't think to ask for documentation during generation

**Why it resists spreading:**
- The focus is on building, not documenting
- "I'll figure it out later" is the default
- Self-generated documentation isn't standard practice
- The prompt addition feels like overhead
- Most tutorials skip documentation steps

**What's lost by accepting it:**
- The assumption you'll understand what you built
- The speed of minimal prompts

**Verification:**
> "People have started asking for in their prompts, like create a walkthrough of the feature as well. And it actually then just goes and clicks through things and shows you stuff."

---

### 7. "Make Me This App" Is a Top-Tier Prompt

**INSIGHT:** Simple, direct prompts like "make me this app" with a screenshot can create functional multiplayer apps in one shot. Don't overcomplicate it - keep it simple.

**CATEGORY:** Antimeme

**CLASSIFICATION:** Diagnostic

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Ignoring
- Recognition vs. vertigo? Recognition

**SCORES:**
- Actionability: 5
- Specificity: 5
- Surprise: 4
- Shareability: 4

**RESISTANCE TYPE:** Cognitive / Social

**DIAGNOSTIC VALUE:** 7

**Antimemetic Properties:**
- **Cognitive Antimeme:** We've internalized "prompt engineering" as complex and skill-based
- **Social Antimeme:** Simple prompts sound amateur

**Why it resists spreading:**
- "Prompt engineering" discourse emphasizes complexity
- Simple prompts feel like you're not trying hard enough
- The expectation that better prompts = more detailed prompts
- Status signaling through elaborate prompts
- Tutorials often focus on advanced techniques

**What's lost by accepting it:**
- The mystique of prompt engineering skill
- The effort invested in learning complex prompting
- The differentiation from "naive" users

**Verification:**
> "Make me this app. A good reminder. Don't make it too complicated. Keep it simple."

---

## Stage 3: Summary

**Top 3 by Diagnostic Value:**
1. **Tool Calling Is the Holy Grail** (Antimeme) - The breakthrough isn't reasoning, it's reliable tool calling over long tasks - Score: 9
2. **Slop Is What's In Distribution** (Antimeme) - Slop is the default output; you escape it by pushing edges, and the definition shifts - Score: 9
3. **Hour Cost vs. Month Cost Unlocks Creativity** (Antimeme) - Teams become more creative when exploration is cheap - Score: 8

**Most Shareable (Twitter-ready):**
1. **Slop Is What's In Distribution** - Reframes the slop debate from quality to positioning. "The definition of slop will change" as models improve is a provocative prediction.
2. **Loom Is the New Test Suite** - Challenges sacred engineering practices. "I want to see a Loom, not a code diff" is quotable and controversial.

**Most Actionable:**
1. **Ask for the Feature You Didn't Design** - When prototyping, ask the AI to design features you haven't specified yet instead of going back to design tools

**Pattern Across Insights:**
Logan and Ammaar's insights cluster around the theme of simplification unlocking capability. Tool calling (not reasoning) is the breakthrough. Simple prompts ("make me this app") work. Hour-cost exploration unlocks creativity. Looms replace test suites. The underlying pattern: vibe coding success comes from removing complexity, not adding it. The counterintuitive move is always toward simplicity - simpler prompts, simpler validation, cheaper exploration, direct generation without design specs. The definition of slop itself shifts because the "default output" keeps improving. The implication: don't invest in complexity that will be obsolete; invest in taste for pushing edges.
