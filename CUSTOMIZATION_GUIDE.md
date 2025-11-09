# Portfolio Customization Guide

This guide shows you where to update your personal information in the portfolio website.

## Personal Information

### Your Name and Tagline
**File:** `client/src/components/Hero.tsx`
- Line 30-31: Update "Your Name Here" with your actual name
- Line 34-35: Update your professional tagline

### Social Media Links
**File:** `client/src/components/SocialLinks.tsx` (Fixed sidebar on desktop)
**File:** `client/src/components/Contact.tsx` (Contact section)

Update these usernames in both files:
- **Email:** Replace `your.email@example.com` with your actual email
- **GitHub:** Replace `yourusername` with your GitHub username
- **LinkedIn:** Replace `yourusername` with your LinkedIn username
- **Twitter:** Replace `yourusername` with your Twitter handle
- **Instagram:** Replace `yourusername` with your Instagram handle

### Projects
**File:** `client/src/components/Projects.tsx`
- Lines 12-67: Update the `mockProjects` array with your actual projects
- Replace project titles, descriptions, technologies, and image URLs
- Add your live demo URLs and GitHub repository links

### Skills
**File:** `client/src/components/Skills.tsx`
- Lines 7-28: Update the `skillCategories` array with your actual skills
- Add or remove skills from each category as needed

### Code Snippets
**File:** `client/src/components/CodeSnippets.tsx`
- Lines 8-53: Update the `codeExamples` array with your code snippets
- Add your own code examples with title, description, language, and code

### About Me Text
**File:** `client/src/components/Hero.tsx`
- Lines 38-40: Update the bio text with your personal introduction

## Theme Colors

The site uses a Netflix-inspired red and black theme. To customize:

**File:** `client/src/index.css`
- Primary color (red): `--primary: 0 84% 50%;`
- Adjust the values to change hue, saturation, and lightness

## Images

Replace generated images with your own:
1. Add your images to a folder (e.g., `attached_assets/my_images/`)
2. Update the import paths in:
   - `client/src/components/Hero.tsx` - Hero background
   - `client/src/components/Projects.tsx` - Project screenshots

## Contact Form

The contact form currently logs to console. To make it functional:
1. Set up a backend email service
2. Update the `handleSubmit` function in `client/src/components/Contact.tsx`

---

**Note:** All social links currently open in console. Update the `onClick` handlers to remove `console.log` and keep only `window.open(link.href, '_blank')` for actual navigation.
