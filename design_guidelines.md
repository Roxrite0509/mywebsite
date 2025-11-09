# Design Guidelines: Personal Portfolio Website

## Design Approach

**Selected Approach:** Reference-Based (Modern Portfolio Sites)
Drawing inspiration from platforms like Dribbble, Behance, and successful developer portfolios (e.g., Bruno Simon, Lynn Fisher), focusing on bold typography, project-first layout, and smooth interactions.

**Core Principles:**
- Work-first presentation - projects take center stage
- Professional yet personality-driven
- Clean, scannable information architecture
- Subtle but delightful interactions

---

## Typography System

**Font Stack:**
- **Headlines:** "Space Grotesk" or "Plus Jakarta Sans" (700-800 weight) - Bold, geometric for hero and section headers
- **Body/UI:** "Inter" (400-600 weight) - Clean, readable for all content
- **Code:** "JetBrains Mono" - For code snippets

**Hierarchy:**
- Hero Title: 4xl to 6xl (responsive)
- Section Headers: 3xl to 4xl
- Project Titles: xl to 2xl
- Body Text: base to lg
- UI Labels/Meta: sm to base

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Grid Structure:**
- Container: max-w-7xl with px-6 to px-8
- Projects Grid: 1 column mobile, 2 columns tablet (md:), 3 columns desktop (lg:)
- Two-column content areas: Single column mobile, 60/40 split desktop

---

## Component Library

### Navigation
- Sticky header with logo/name on left, navigation links right
- Mobile: Hamburger menu with slide-in drawer
- Smooth scroll to sections with offset for sticky header
- Active section indicator in navigation

### Hero Section
**Layout:** Full viewport height (min-h-screen) with centered content
**Structure:**
- Large typographic name/title with gradient text treatment
- Tagline/professional role
- Brief introduction (2-3 lines)
- Dual CTAs: "View Projects" (primary) + "Download CV" (secondary)
- Scroll indicator at bottom

**Image:** Large hero image - professional portrait or creative workspace photo, positioned right side on desktop (40% width), above content on mobile. Subtle parallax effect on scroll.

### Projects Gallery
**Card Design:**
- Thumbnail image with overlay on hover
- Project title, tech tags as pills
- Brief description (1-2 lines)
- Hover state: Overlay with "View Details" + "Live Demo" + "GitHub" links
- Filter bar above grid: "All", "Web", "Mobile", "Design", etc.

**Detail Modal:**
- Full-screen overlay with dark backdrop
- Large project screenshots in carousel
- Right sidebar: Title, description, tech stack, links
- Close button top-right

### Code Snippets Section
- Card-based layout with syntax-highlighted code blocks
- Language badges (JavaScript, React, Python, etc.)
- Copy button top-right of each snippet
- Dark theme code editor aesthetic
- Brief description above each snippet

### Skills Showcase
**Visual Approach:** Card grid (not progress bars - more modern)
- Icon + skill name cards
- Group by categories: "Frontend", "Backend", "Tools", "Design"
- 4-column grid desktop, 2-column tablet, 1-column mobile
- Subtle hover lift effect

### CV/Resume Section
- Split view: PDF preview left (embedded iframe), download/print actions right
- Alternative: Stylized HTML resume with download option
- "Download PDF" primary button + "Print" secondary button

### Contact Form
**Layout:** Centered form max-w-2xl
- Name, Email, Subject, Message fields
- Large textarea for message
- Submit button with loading state
- Success/error toast notifications
- Optional: Contact info sidebar (email, social links)

### Footer
- Centered layout with social media icon links
- Copyright notice
- "Back to top" link
- Quick navigation links repeated

---

## Animations

**Minimal, purposeful only:**
- Fade-in on scroll for sections (subtle, once)
- Smooth scroll for navigation
- Modal open/close transitions
- Button hover scale (1.02)
- Card hover lift (translateY(-4px))

---

## Admin Dashboard

**Separate authenticated area:**
- Simple table layouts for managing projects, skills, code snippets
- Form-based add/edit interfaces
- Delete confirmations
- Image upload for project thumbnails
- Rich text editor for project descriptions
- Minimal design - focus on functionality

---

## Images

**Hero Section:** Professional portrait or creative workspace - right side on desktop, full-width above content on mobile

**Project Thumbnails:** Screenshots or mockups of each project - aspect ratio 16:9, minimum 1200px width

**About Section (optional):** Candid photo showing personality - circular crop or natural rectangular

All images should be optimized, use modern formats (WebP with fallbacks), and include proper alt text.

---

## Accessibility

- Semantic HTML throughout (nav, main, section, article)
- ARIA labels for icon-only buttons
- Focus states on all interactive elements (2px outline offset)
- Keyboard navigation for modals and menus
- Alt text for all images
- Sufficient color contrast (AA minimum)
- Skip to main content link