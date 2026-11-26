# Responsive Portfolio & Dynamic Project Cards - Magilesh MB

> **Week 2 Milestone Project** for the **Full Stack Engineer Virtual Internship** at **SkillMe** (building upon Week 1).

🔗 **Repository:** [Responsive-Layout-Project-Cards-with-JavaScript](https://github.com/magilesh07-pixel/Responsive-Layout-Project-Cards-with-JavaScript)

A clean, responsive, and interactive single-page developer portfolio website built with semantic HTML5, mobile-first CSS3 (Flexbox, CSS Variables, and Media Queries), and vanilla JavaScript DOM manipulation.

---

## 👨‍💻 Developer Profile

- **Name:** Magilesh MB
- **Role:** Web Developer & Aspiring Full Stack Engineer
- **Internship:** SkillMe Full Stack Engineer Virtual Internship
- **Location:** India 🇮🇳 (Open to Remote & Hybrid Roles)
- **Email:** [magilesh8@gmail.com](mailto:magilesh8@gmail.com)
- **GitHub:** [github.com/magilesh07-pixel](https://github.com/magilesh07-pixel)
- **LinkedIn:** [linkedin.com/in/magilesh-mb-65ba13370](https://www.linkedin.com/in/magilesh-mb-65ba13370/)

---

## 🚀 Featured Projects Showcased

All project cards are dynamically rendered from a `projects` JavaScript array in [script.js](script.js) via `renderProjects()`:

1. **[HealthGuard AI](https://github.com/magilesh07-pixel/healthguard-ai)**
   - *Category:* Healthcare & AI Assistant
   - *Tech:* `Python`, `AI / ML`, `HTML/CSS`, `HealthTech`

2. **[National Agriculture Portal](https://github.com/magilesh07-pixel/NATIONAL-AGRICULTURE-PORTAL)**
   - *Category:* AgTech & Web Portal
   - *Tech:* `HTML/CSS`, `JavaScript`, `Flexbox`, `Web Portal`

3. **[FreshGuard AI](https://github.com/magilesh07-pixel/FreahGuard-AI)**
   - *Category:* Food Tech & Computer Vision
   - *Tech:* `Python`, `AI / ML`, `Computer Vision`, `Deep Learning`

---

## 🛠️ Features & Tech Stack

### Week 1: Semantic HTML5 & CSS3 Foundation
- **Semantic HTML5:** Structured with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- **Modern CSS3:** Design tokens in `:root`, smooth scrolling (`scroll-behavior: smooth`), Flexbox layouts, and hover lift effects (`transform: translateY(-4px)`).

### Week 2: Responsive Layout & JavaScript Interactivity
- **Mobile-First Media Queries:** Tested down to **375px** width with zero horizontal overflow; project cards stack in a single column on mobile and arrange in a responsive row on tablet/desktop.
- **Interactive Mobile Hamburger Menu:** Hidden on desktop (`>= 768px`), toggles the `.open` class on `.navbar` via `addEventListener`, and **automatically closes** when any navigation link is clicked.
- **Data-Driven Project Cards:** Project objects live in `projects` inside `script.js` (`title`, `description`, `tags`, `link`, etc.) and render cleanly with `array.map()` and template literals.
- **Interactive Tag Filtering:** Filter buttons (`All`, `HTML/CSS`, `JavaScript`, `Python`, `AI / ML`) dynamically filter cards with `array.filter()` and highlight the active selection.

---

## 📁 Project Structure

```text
Portfolio/
├── index.html          # Semantic HTML5 document with hamburger & filter controls
├── style.css           # Mobile-first CSS3 with media queries & design tokens
├── script.js           # Vanilla JS for mobile menu, project rendering & filtering
├── README.md           # Documentation & internship milestone details
└── images/             # Vector SVGs and assets
    ├── profile.svg     # Developer portrait illustration
    ├── project1.svg    # HealthGuard AI preview graphic
    ├── project2.svg    # National Agriculture Portal preview graphic
    └── project3.svg    # FreshGuard AI preview graphic
```

---

## 💻 How to View Locally

1. Open PowerShell in the portfolio directory:
   ```powershell
   Start-Process .\index.html
   ```
2. Or simply double-click `index.html` in Windows Explorer.

---

## 📝 Official SkillMe Week 2 LinkedIn Post Caption (Ready to Copy)

```text
🚀 Excited to share my Week 2 milestone for 'Modern Interactive Portfolio & DevStudio' in the Full Stack Engineer Virtual Internship at @SkillMe!

What I did in Week 2:
• Made my portfolio fully responsive using media queries and a mobile-first approach
• Built a mobile hamburger menu with vanilla JavaScript and DOM events
• Rendered project cards dynamically from a JavaScript array with category filters

Here's a quick demo of it running 👇

🔗 GitHub Repository: https://github.com/magilesh07-pixel/Responsive-Layout-Project-Cards-with-JavaScript

We're hiring tech interns. Apply now - https://www.skill-me-intern.in/apply?utm_source=linkedin&utm_medium=student_post&utm_campaign=week2&utm_content=web-dev

#SkillMe #SkillMeInternship #WebDevelopment #BuildInPublic #LearningByDoing #TechInternship
```
