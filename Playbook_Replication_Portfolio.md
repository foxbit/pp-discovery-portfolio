# Playbook: How to Build "State-of-the-Art" Discovery Portfolios

This document serves as a practical guide to replicating the architecture, design and content strategy used in the **PP Discovery Portfolio** project. The goal is to help you turn any technical case (Discovery, UX Research, Data Engineering) into a premium narrative experience.

---

## 1. The Design Philosophy: The "Iceberg" Model

The central premise of this portfolio is that **different stakeholders consume information at different depths**.

### Layer 1: The Showcase (Storytelling)
*   **Audience:** C-Levels, Recruiters, Prospects.
*   **Goal:** Sell the vision, the impact and the quality of strategic thinking.
*   **Format:** Editorial long-form text, visual cards, icons, highlight phrases.
*   **Golden Rule:** Never show a raw table here. Turn data into visual insights.

### Layer 2: The Laboratory (Raw Data)
*   **Audience:** Lead Designers, PMs, Engineers, Technical Auditors.
*   **Goal:** Prove the technical depth and the authenticity of the process.
*   **Format:** Interactive modals, requirement lists, data tables, transcripts.
*   **Golden Rule:** Transparency builds trust. Let anyone who wants to "see the code" (or the raw data) do so without leaving the page.

---

## 2. Content Strategy: From Report to Narrative

Do not copy and paste your Discovery report. Rewrite it as a story.

### Recommended Page Structure
For each section of your portfolio (e.g., Users, Market, Solution), follow this flow:

1.  **Section Header:** Clear title + subtitle summarizing the main takeaway.
2.  **Narrative Introduction (The Hook):** 2 to 3 paragraphs of running text.
    *   *Don't say:* "We conducted 10 interviews."
    *   *Say:* "To understand the user's real pain, we dove into the routine of 10 people and uncovered an invisible pattern..."
3.  **Visual Highlights (Bento Grid/Cards):** The 3-5 key points in beautiful cards. Use large icons and semantic colors (Green = Opportunity, Red = Pain).
4.  **Deep Dive (Modal/Laboratory):** A discreet button or link ("View detailed data") that opens the technical content.

### Tone of Voice
*   **Professional, but Human:** Use "We discovered", "The challenge was".
*   **Editorial:** Think like a magazine (Wired, Harvard Business Review), not a thesis.
*   **Honest:** Highlight failures and challenges, not just successes. PP's "Growth Paradox" is an example of how a weakness becomes a powerful story.

---

## 3. Technology Stack & Key Components

To replicate the visual quality and interactivity, we recommend this stack:

*   **Framework:** React (Vite) + TypeScript
*   **Styling:** Tailwind CSS (for speed and consistency of design tokens)
*   **Animation:** Framer Motion (essential for the "premium" feel)
*   **Icons:** Phosphor Icons (consistent and elegant)

### Essential Components (Copy these patterns)

#### A. `Layout.tsx` (Side Navigation)
A fixed left sidebar that works as a report index.
*   *Why:* It gives the feel of a "digital book" or dashboard, unlike a common marketing site.

#### B. `VitrineCard.tsx` (The Building Block)
A flexible card component with:
*   Soft shadow (`shadow-sm` to `shadow-md` on hover).
*   Subtle border (`border-border`).
*   Entrance animation (framer-motion fade-in-up).
*   Hover effect (`scale-105` or "lift").

#### C. `LaboratorioModal.tsx` (The Hidden Layer)
A Dialog/Modal component that accepts any `children` content.
*   *Usage:* Put giant tables, lists of 50 requirements or complex flowcharts inside it. Keep the page clean.

---

## 4. Step-by-Step Execution Guide

### Step 1: Extraction and Structure (The Skeleton)
1.  Take your original report (PDF/Doc).
2.  Create a `sitemap.txt` file defining the sections (e.g., Context, Research, Ideation).
3.  For each section, write the "Narrative Summary" (the introduction paragraphs).

### Step 2: Project Setup
1.  Start a React + Tailwind project.
2.  Define your colors in `tailwind.config.js` or `index.css`:
    *   `primary`: Brand color (e.g., Navy Blue).
    *   `muted`: Soft background color (e.g., Ice Gray).
    *   `accent`: Highlight color (e.g., Success Green).
3.  Install `framer-motion` and `phosphor-react`.

### Step 3: Layered Development
1.  **Create the Layout:** Sidebar + Content Area.
2.  **Create the Home:** Tell the company/project story. Use the "Blog Post" structure we created.
3.  **Create the Inner Pages:** Use the Introduction -> Cards -> Modal pattern.

### Step 4: Polish (The "State-of-the-Art")
1.  **Entrance Animations:** Nothing should appear "dry". Everything should slide smoothly (`y: 20` -> `y: 0`, `opacity: 0` -> `opacity: 1`).
2.  **Micro-interactions:** Buttons must react to clicks. Links must change color.
3.  **Responsiveness:** Test whether the sidebar becomes a hamburger menu on mobile.

---

## 5. Final Quality Checklist

Before delivering, check:
- [ ] **Readability:** Are the introductory texts fluid? (Read them aloud).
- [ ] **Hierarchy:** Are headings larger than subheadings? Are highlight colors used sparingly?
- [ ] **Navigation:** Is it easy to move from one section to another?
- [ ] **Performance:** Do the animations lag? (Optimize if necessary).
- [ ] **Storytelling:** Does the portfolio answer the question "What was the problem and how did you solve it?"

---

**Final Tip:** The secret is not the technology, it is **curation**. What you *choose not to show* in the showcase is as important as what you show. Use the "Laboratory" for the rest.