# Antimeme Analysis: CJ Hess on Vibe Code Camp

**Topic:** The MCP that teaches Claude every framework
**Company:** Tenex
**YouTube:** https://www.youtube.com/watch?v=5YBjll9XJlw&t=14530s
**Analyzed:** 2026-01-24

---

## Stage 1: Popular vs. Rare Concepts

### Popular Takeaways (80-90% of viewers would mention)

1. **10X business model** - Get paid by StoryPoint, not hour, so faster = more money
2. **Monorepos** - All code in one place so Claude can build database → backend → frontend in one flow
3. **Flowy tool** - Visual JSON-based flowchart/mockup tool that Claude can read and edit
4. **Voice-to-text adoption** - Using WhisperFlow to ramble prompts faster than typing
5. **Plan mode heavy user** - Sits in markdown plans until they're "almost exactly what I want"
6. **Carnegie Mellon CS background** - Traditional engineering background, did startup attempts, then contracting
7. **Skills over MCPs** - Uses skills and CLIs instead of MCPs for less context bloat
8. **Frankenstein monorepo** - Running Claude from a higher directory to see both frontend and backend

### Rare Insights (1-5% would notice) - Three Lenses:

1. [ANTIMEME] **Anti-MCP: Skills and CLIs Are Better**
2. [ANTIMEME] **Typing Laziness vs. Rambling Specificity**
3. [WORKFLOW] **JSON as the Universal Design Language**
4. [TACTIC] **ASCII Boxes Are the Stone Age**
5. [WORKFLOW] **Code Review Before Code**
6. [ANTIMEME] **Ralph for Side Projects, Control for Production**
7. [TACTIC] **Frankenstein Monorepo Workaround**
8. [ANTIMEME] **70% Figma, 100% Claude-Readable**

---

## Stage 2: Antimemetic Properties Analysis

### 1. Anti-MCP: Skills and CLIs Are Better

**INSIGHT:** MCPs are overhyped - skills and CLIs often do the same job with less context bloat. For reading (not just writing), MCPs struggle to give you exact one-to-one matches with your code.

**CATEGORY:** Antimeme

**CLASSIFICATION:** Diagnostic

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Ignoring
- Recognition vs. vertigo? Recognition

**SCORES:**
- Actionability: 4
- Specificity: 5
- Surprise: 5
- Shareability: 5

**RESISTANCE TYPE:** Social / Cognitive

**DIAGNOSTIC VALUE:** 9

**Antimemetic Properties:**
- **Social Antimeme:** MCPs are the current hot thing - saying they're overrated sounds contrarian
- **Cognitive Antimeme:** "More integrations = more power" feels intuitively true

**Why it resists spreading:**
- MCPs are being heavily promoted by Anthropic and tool makers
- "I'm anti-MCP" sounds like a hot take rather than experience
- Context bloat is invisible until you're debugging
- The MCP ecosystem is expanding rapidly, FOMO pressure
- Skills require more upfront work to create

**What's lost by accepting it:**
- The excitement of new integrations and possibilities
- The dream of connecting everything seamlessly
- FOMO about missing the MCP wave

**Verification:**
> "I'm anti-MCP. I find that skills and CLIs are often just as capable and also kind of give you way less context bloat."

---

### 2. Typing Laziness vs. Rambling Specificity

**INSIGHT:** When typing prompts, there's "inherent laziness" that makes you write shorter, vaguer prompts. When rambling via voice-to-text, you naturally give way more context and specificity because talking is faster than typing.

**CATEGORY:** Antimeme

**CLASSIFICATION:** Diagnostic

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Missing
- Recognition vs. vertigo? Recognition

**SCORES:**
- Actionability: 5
- Specificity: 5
- Surprise: 4
- Shareability: 5

**RESISTANCE TYPE:** Implementation / Psychological

**DIAGNOSTIC VALUE:** 8

**Antimemetic Properties:**
- **Psychological Antimeme:** We don't think of prompt quality as a function of input method
- **Implementation Antimeme:** Setting up voice-to-text feels like extra friction

**Why it resists spreading:**
- "Typing is how I work" is deeply ingrained
- Voice input in shared spaces feels awkward
- The connection between input method and prompt quality isn't obvious
- Most tutorials show typed prompts
- "I can type fast" is a point of pride for developers

**What's lost by accepting it:**
- The perception of typing proficiency as adequate
- The privacy of silent work

**Verification:**
> "When I'm typing, there's some inherent laziness where I don't want to spend the time to type out this perfectly exact prompt... But if I'm just rambling, I'm way more specific."

---

### 3. JSON as the Universal Design Language

**INSIGHT:** The breakthrough isn't visual mockups for humans - it's JSON mockups that Claude can actually read and modify. Flowy stores diagrams as JSON files with spatial coordinates, which lets Claude iterate on them programmatically.

**CATEGORY:** Workflow

**CLASSIFICATION:** Frontier

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Missing
- Recognition vs. vertigo? Recognition

**SCORES:**
- Actionability: 4
- Specificity: 5
- Surprise: 5
- Shareability: 4

**RESISTANCE TYPE:** Implementation / Cognitive

**DIAGNOSTIC VALUE:** 8

**Antimemetic Properties:**
- **Cognitive Antimeme:** We think of designs as images for humans, not data for AI
- **Implementation Antimeme:** Requires building custom tooling (Flowy)

**Why it resists spreading:**
- Figma and design tools export images, not AI-readable JSON
- "Design" is mentally categorized as visual, not structural
- Building a custom tool like Flowy is a weekend project most won't do
- The JSON-to-visual translation layer is non-obvious

**What's lost by accepting it:**
- The simplicity of screenshot → code workflows
- The separation between design tools and development

**Verification:**
> "In your IDE, these actually live as JSON files... And Claude gets a much better place where it can iterate on the flow."

---

### 4. ASCII Boxes Are the Stone Age

**INSIGHT:** Planning in markdown with ASCII diagrams is a bottleneck - the nomenclature gets mixed up, it's hard to visualize, and changing flows requires long convoluted prompts. Visual tools that output Claude-readable formats are the upgrade.

**CATEGORY:** Tactic

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

**RESISTANCE TYPE:** Implementation

**DIAGNOSTIC VALUE:** 7

**Antimemetic Properties:**
- **Implementation Antimeme:** ASCII art in markdown is the default; alternatives require setup

**Why it resists spreading:**
- Markdown + ASCII is zero-setup
- Plan mode already works reasonably well with ASCII
- "Good enough" is the enemy of better
- Most vibe coding tutorials show ASCII workflows
- Building or finding alternatives takes time

**What's lost by accepting it:**
- The simplicity of text-only workflows
- Compatibility with any text editor

**Verification:**
> "I got tired of looking at these ASCII boxes."

---

### 5. Code Review Before Code

**INSIGHT:** In plan mode, go beyond the markdown plan - have Claude write out all the code file by file as diffs, then do a code review before touching any actual files. Review the theoretical code before it becomes real.

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

**RESISTANCE TYPE:** Implementation / Psychological

**DIAGNOSTIC VALUE:** 7

**Antimemetic Properties:**
- **Psychological Antimeme:** Feels like extra work before "real" work starts
- **Implementation Antimeme:** Requires discipline to not just execute

**Why it resists spreading:**
- The urge to "just build it" is strong
- Reviewing theoretical code feels academic
- Most tutorials go straight from plan to implementation
- The extra step seems redundant
- "I'll fix it after" is the default mindset

**What's lost by accepting it:**
- The speed of direct plan → code execution
- The simplicity of trusting the plan

**Verification:**
> "There are definitely times where I even go a step further and I'm like, write out all the code file by file. Give me some diffs. And I almost want to do a code review before we're actually touching the files."

---

### 6. Ralph for Side Projects, Control for Production

**INSIGHT:** Autonomous loops (Ralph) are great for side projects where you're not opinionated about details, but terrifying for production systems. Use human-in-the-loop control for client work, let Ralph run wild on weekends.

**CATEGORY:** Antimeme

**CLASSIFICATION:** Diagnostic

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Ignoring
- Recognition vs. vertigo? Recognition

**SCORES:**
- Actionability: 4
- Specificity: 5
- Surprise: 4
- Shareability: 4

**RESISTANCE TYPE:** Psychological / Social

**DIAGNOSTIC VALUE:** 7

**Antimemetic Properties:**
- **Social Antimeme:** The "agentic coding" hype makes full autonomy sound like the goal
- **Psychological Antimeme:** Admitting you don't trust autonomous agents sounds behind the curve

**Why it resists spreading:**
- Autonomy is being promoted as the future
- "I still use human-in-the-loop" sounds conservative
- The distinction between side projects and production isn't always clear
- FOMO about not being "fully agentic"

**What's lost by accepting it:**
- The dream of fully autonomous coding
- The simplicity of one workflow for everything

**Verification:**
> "I'd be terrified of Ralph... It's great when I'm building something like Flowy where I'm not super opinionated and I'm kind of trying to get to an MVP on a side project. But if it's some production system, I'd be terrified."

---

### 7. Frankenstein Monorepo Workaround

**INSIGHT:** When clients don't have monorepos, create a "Frankenstein monorepo" by running Claude from a higher directory that contains both frontend and backend as subdirectories. You get monorepo benefits without restructuring the client's codebase.

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

**RESISTANCE TYPE:** Implementation

**DIAGNOSTIC VALUE:** 7

**Antimemetic Properties:**
- **Implementation Antimeme:** The workaround isn't documented or taught anywhere standard

**Why it resists spreading:**
- "That's not how the codebase is structured" feels like a constraint
- Running Claude from a different directory than your project root is unusual
- Most assume they're stuck with the existing structure
- The workaround isn't obvious from first principles

**What's lost by accepting it:**
- The cleaner mental model of working in "the" project directory
- The assumption that existing structure is fixed

**Verification:**
> "There's some like I'd call them like a Frankenstein mono repo where we're a part of the front end and the back end directory so we can still reference them. We actually run Claude in like a higher directory."

---

### 8. 70% Figma, 100% Claude-Readable

**INSIGHT:** The goal for visual design tools isn't to replicate Figma's full feature set - it's to get 70% of Figma's design capability while ensuring Claude can work with the underlying JSON directly. Dev mode built-in from the start.

**CATEGORY:** Antimeme

**CLASSIFICATION:** Frontier

**QUICK TEST:**
- Behavior change possible? Y
- Missing vs. ignoring? Missing
- Recognition vs. vertigo? Recognition

**SCORES:**
- Actionability: 3
- Specificity: 4
- Surprise: 4
- Shareability: 4

**RESISTANCE TYPE:** Cognitive / Implementation

**DIAGNOSTIC VALUE:** 6

**Antimemetic Properties:**
- **Cognitive Antimeme:** "Less features" doesn't sound like progress
- **Implementation Antimeme:** Requires building custom tools instead of using established ones

**Why it resists spreading:**
- Figma has network effects and designer familiarity
- "Just use Figma's MCP" sounds like the obvious answer
- Building partial tools feels like reinventing the wheel
- The tradeoff (fewer features but AI-readable) isn't obvious

**What's lost by accepting it:**
- The comfort of using industry-standard tools
- Access to Figma's full feature set

**Verification:**
> "If I look at Figma, basically I would want 70% of the functionality of just the design of Figma and then have Claude be able to just work with the JSON off that."

---

## Stage 3: Summary

**Top 3 by Diagnostic Value:**
1. **Anti-MCP: Skills and CLIs Are Better** (Antimeme) - Context bloat makes MCPs worse than skills for many use cases - Score: 9
2. **Typing Laziness vs. Rambling Specificity** (Antimeme) - Voice produces more detailed prompts because talking is faster than typing - Score: 8
3. **JSON as the Universal Design Language** (Workflow) - Designs stored as JSON let Claude iterate on them directly - Score: 8

**Most Shareable (Twitter-ready):**
1. **Anti-MCP: Skills and CLIs Are Better** - Provocative contrarian take against the current hype. "I'm anti-MCP" is a great quote.
2. **Typing Laziness vs. Rambling Specificity** - Explains a phenomenon everyone experiences but hasn't named. Immediately testable.

**Most Actionable:**
1. **Frankenstein Monorepo Workaround** - If you're stuck with separate frontend/backend repos, run Claude from a parent directory that contains both

**Pattern Across Insights:**
CJ's insights cluster around the theme of reducing friction between your intent and Claude's understanding. The anti-MCP stance is about reducing context bloat. Voice-to-text produces more detailed prompts because talking is lower friction than typing. Flowy converts visual intent into Claude-readable JSON. The Frankenstein monorepo gives Claude full context even when the codebase is split. The code-review-before-code workflow catches misunderstandings before they become real code. The common thread: every workflow optimization is about getting cleaner signal from human to AI, with less noise, less translation loss, and less ambiguity.
