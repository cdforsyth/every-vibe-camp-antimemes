# Process One Vibe Code Camp Speaker Transcript

You are analyzing transcripts from Every's Vibe Code Camp to extract antimemetic insights - important ideas about building with AI that resist spreading despite their value.

## Context

This is an 8-hour livestream where expert vibe coders demonstrated how they actually build software with AI. The content is demo-heavy and tactical, so we're casting a wide net with **three lenses**:

1. **Antimemes** - Deep counterintuitive truths that resist spreading despite their value
2. **Surprising Workflows** - "Wait, you do it THAT way?" moments - unexpected approaches most wouldn't think of
3. **Counterintuitive Tactics** - Specific techniques that go against conventional wisdom

All three get the same appraisal framework. We'll pick the highest-scoring insights regardless of category.

## Your Task

1. Find the next unprocessed speaker from `data/speakers.json`
2. Read their transcript from `data/transcripts/{slug}.txt`
3. Analyze it using the 3-stage framework below
4. Save the output as markdown
5. Update progress tracking

---

## Step 1: Find Next Unprocessed Speaker

Read `data/speakers.json` and find the first speaker where `processed: false`.

If all speakers are processed, output `<done>ALL_COMPLETE</done>` and stop.

---

## Step 2: Read Transcript

Read the transcript file from `data/transcripts/{slug}.txt`.

The file includes metadata (speaker, company, topic, timestamp, youtube_url) at the top.

---

## Step 3: Analyze Using the 3-Stage Framework

### Stage 1: Popular vs. Rare Concepts

**Popular Takeaways (80-90% of viewers would mention):**
List 5-7 key ideas, workflows, or quotes that are memorable, headline-worthy, or directly stated as main points.

**Rare Insights (1-5% would notice) - Three Lenses:**

Scan the transcript through all three lenses and list 5-7 total insights:

1. **Antimemes** - Counterintuitive truths that resist spreading. Ideas people understand but fail to internalize or act upon. Mark with [ANTIMEME]

2. **Surprising Workflows** - Unexpected ways of working. "Wait, you do it THAT way?" moments. Approaches that feel wrong but work better. Mark with [WORKFLOW]

3. **Counterintuitive Tactics** - Specific techniques that go against conventional wisdom. Concrete practices that contradict standard advice. Mark with [TACTIC]

Note: Some speakers will be richer in one category than others. That's fine - capture what's actually there.

### Stage 2: Antimemetic Properties Analysis

For each rare insight, provide:

```
### [Number]. [Insight Title]

**INSIGHT:** [One-sentence summary of the insight]

**CATEGORY:** Antimeme / Workflow / Tactic

**CLASSIFICATION:** Diagnostic / Frontier / Hybrid

**QUICK TEST:**
- Behavior change possible? Y/N
- Missing vs. ignoring? Missing/Ignoring
- Recognition vs. vertigo? Recognition/Vertigo

**SCORES:**
- Actionability: [1-5] - Can someone do something different after hearing this?
- Specificity: [1-5] - Is this concrete or vague?
- Surprise: [1-5] - Does this contradict conventional wisdom?
- Shareability: [1-5] - Would someone retweet this to look smart?

**RESISTANCE TYPE:** [Psychological / Social / Epistemic / Implementation]

**DIAGNOSTIC VALUE:** [1-10]

**Antimemetic Properties:**
- **Cognitive Antimeme:** [If applicable]
- **Social Antimeme:** [If applicable]
- **Implementation Antimeme:** [If applicable]
- **System Antimeme:** [If applicable]

**Why it resists spreading:**
- [Bullet points explaining the mental resistance]

**What's lost by accepting it:**
- [What you have to give up to truly internalize this]

**Verification:**
> "[Direct quote from transcript that supports this insight]"
```

### Stage 3: Summary

**Top 3 by Diagnostic Value:**
1. [Title] ([Category]) - [One-line description]
2. [Title] ([Category]) - [One-line description]
3. [Title] ([Category]) - [One-line description]

**Most Shareable (Twitter-ready):**
1. [Title] - [Why it would get retweeted]
2. [Title] - [Why it would get retweeted]

**Most Actionable:**
1. [Title] - [What to do differently]

**Pattern Across Insights:**
[2-3 sentences describing what structure or theme connects this speaker's insights]

---

## Classification Guide

**Diagnostic:** Currently actionable, high value if retained, resists spreading
**Frontier:** Cutting-edge, only experts know, not yet actionable for most
**Hybrid:** Has elements of both

**Quick Test Definitions:**
- **Missing vs Ignoring:** Do people not know this (missing) or know but not act on it (ignoring)?
- **Recognition vs Vertigo:** Does hearing it feel like "yes, I knew that" (recognition) or destabilizing (vertigo)?

---

## Step 4: Save Output

Save the analysis as markdown to `data/insights/{speaker-slug}.md`

Use the slug from the speaker data (e.g., `dan-shipper.md`).

Format the file header:
```markdown
# Antimeme Analysis: {Speaker Name} on Vibe Code Camp

**Topic:** {Topic}
**Company:** {Company}
**YouTube:** {youtube_url}
**Analyzed:** {today's date}

---
```

---

## Step 5: Update Progress

After saving the analysis:

1. Update `data/speakers.json`:
   - Set `processed: true` for this speaker

2. Update `data/progress.json`:
   - Increment `processed_count`
   - Update `last_updated` timestamp

---

## Output

When you've successfully processed one transcript:
1. Confirm which speaker was processed
2. List the 5-7 antimemetic insights you found (titles only)
3. Output `<done>COMPLETE</done>`

If there's an error, explain the issue and output `<done>COMPLETE</done>` so the loop continues.

---

## Quality Checklist

Before saving, verify:
- [ ] 5-7 popular takeaways identified
- [ ] 5-7 rare/antimemetic insights identified
- [ ] Each rare insight has full Stage 2 analysis
- [ ] Each has a direct quote for verification
- [ ] Summary includes actionable, paradigm-shifting, and pattern
- [ ] File saved to correct location
- [ ] Progress tracking updated

---

## Antimeme Type Definitions (Reference)

Use these definitions to identify and classify antimemetic properties:

### Cognitive Antimemes
- Ideas that people understand intellectually but consistently fail to internalize or act upon
- Concepts that become counterintuitive again even after you've grasped them
- Insights that require constant re-learning because they don't stick naturally

### Social Antimemes
- Concepts that are professionally or socially inconvenient to discuss
- Ideas that threaten existing status hierarchies or institutional structures
- Insights that make people uncomfortable in professional or social contexts

### Implementation Antimemes
- Knowledge that becomes less effective when widely known or explicitly stated
- Concepts that work better as implicit background assumptions than explicit strategies
- Ideas that lose their power when turned into standard operating procedures

### System Antimemes
- Insights that undermine the foundations of entire fields or ways of thinking
- Concepts that require giving up something valuable (certainty, simple explanations, professional identity)
- Ideas that reveal uncomfortable truths about how systems really work

---

## Verification Standards

For each antimemetic insight:
- Cite specific moments (timestamp if available, speaker, direct quote)
- If implicit rather than explicit, mark as "interpretive" or "inferred from context"
- Flag uncertain claims rather than presenting as definitive
- Distinguish between concepts speakers explicitly discuss vs. patterns you're extrapolating
