# Frontend Mentor - Room homepage solution

![GitHub last commit](https://img.shields.io/github/last-commit/berefire/room-homepage)
![Repo size](https://img.shields.io/github/repo-size/berefire/room-homepage)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Semantic HTML](https://img.shields.io/badge/Semantic%20HTML-ff9800?style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
[![Frontend Mentor](https://img.shields.io/badge/Frontend%20Mentor-3e54a3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/)
![Architecture - BEM](https://img.shields.io/badge/Architecture-BEM-000000?style=for-the-badge)
![CUBE CSS](https://img.shields.io/badge/CUBE%20CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Build Tool - Vite](https://img.shields.io/badge/Build%20Tool-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Accessibility](https://img.shields.io/badge/Accessibility-A11Y-0052cc?style=for-the-badge)
![Responsive Layout](https://img.shields.io/badge/Responsive%20Layout-Full%20Support-blue?style=for-the-badge)
![Mobile First](https://img.shields.io/badge/Mobile--First-Design-orange?style=for-the-badge)
[![Google Lighthouse](https://img.shields.io/badge/Lighthouse-Audit-00B0FF?style=for-the-badge&logo=lighthouse&logoColor=white)](./assets/downloads/lighthouse-performance-report.pdf)

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#️my-process)
  - [Built With](#built-with)
  - [Architecture](#architecture)
  - [Accessibility Features](#accessibility-features)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## 📖Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size.
- See hover and focus states for all interactive elements.
- Navigate the hero slider using mouse, touch, or keyboard.
- Open and close the mobile navigation using an accessible dialog.
- Experience subtle animations that respect the user's reduced motion preference.

### 📸Screenshot

### 🔗Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://berefire.github.io/room-homepage/](https://berefire.github.io/room-homepage/)

---

## ⚙️My process

### 🛠Built with

- Semantic HTML5
- Sass (SCSS)
- CSS Custom Properties
- Mobile-first workflow
- CSS Grid
- Flexbox
- JavaScript (ES Modules)
- Vite
- CUBE CSS principles
- BEM naming convention

---

### 🔎Architecture

The project follows a modular architecture that separates responsibilities across styles and JavaScript.

#### Sass

```text
styles/
├── abstracts/
├── base/
├── components/
├── layout/
├── tokens/
├── utilities/
└── main.scss
```

#### JavaScript

```text
js/
├── data/
├── features/
│   ├── slider/
│   └── mobile-menu/
└── shared/
```

Each feature is organized using:

- `controller.js`
- `events.js`
- `index.js`

This structure keeps DOM manipulation, business logic, and event handling clearly separated.

---

### ♿Accessibility Features

Accessibility was considered throughout the project.

Implemented features include:

- Semantic HTML structure
- Keyboard accessible slider controls
- Keyboard accessible mobile navigation
- Proper use of ARIA attributes
- Visible keyboard focus indicators using `:focus-visible`
- Responsive typography
- Respect for `prefers-reduced-motion`
- Accessible dialog implementation
- Decorative SVGs hidden from assistive technologies
- Live region updates for changing hero content

---

### 💡What I learned

This project helped reinforce several frontend concepts.

Some highlights include:

- Designing a scalable Sass architecture using design tokens and semantic tokens.
- Combining CUBE CSS principles with BEM naming.
- Building reusable Sass mixins for typography, media queries, focus styles, and CSS variable generation.
- Creating modular JavaScript using the controller/event pattern.
- Managing responsive images using the `<picture>` element.
- Implementing accessible animations while respecting user motion preferences.
- Structuring DOM utilities to improve maintainability.

Example of the typography mixin:

```scss
@mixin text-style($style) {
    font-family: map.get($style, family);
    font-size: map.get($style, size);
    font-weight: map.get($style, weight);
    line-height: map.get($style, line-height);
    letter-spacing: map.get($style, letter-spacing);
}
```

Example of the slider controller pattern:

```javascript
function showNextSlide() {
    currentIndex = (currentIndex + 1) % SLIDES.length;
    animate(render);
}
```

---

### 🚀Continued development

Areas I'd like to continue improving include:

- Advanced animation techniques with the Web Animations API.
- More reusable JavaScript architecture for UI components.
- Automated testing with Vitest.
- End-to-end testing with Playwright.
- Performance optimization and lazy loading strategies.
- Building additional accessible interactive components.

---

### 📚Useful resources

- Frontend Mentor — <https://www.frontendmentor.io/>
- MDN Web Docs — <https://developer.mozilla.org/>
- Every Layout — <https://every-layout.dev/>
- CUBE CSS — <https://cube.fyi/>
- WAI-ARIA Authoring Practices — <https://www.w3.org/WAI/ARIA/apg/>

### 🤖AI Collaboration

AI was used as a collaborative development assistant throughout this project.

It helped with:

- Reviewing HTML semantics and accessibility.
- Refining the Sass architecture.
- Improving JavaScript module organization.
- Debugging layout and responsive issues.
- Reviewing commit messages.
- Discussing accessibility best practices.
- Brainstorming responsive layouts and animation techniques.

All code was reviewed, adapted, and integrated manually to fit the project's architecture and coding standards.

---

## 👤Author

- Frontend Mentor - [@berefire](https://www.frontendmentor.io/profile/berefire)
- GitHub - [@berefire](https://github.com/berefire)

## 🙏Acknowledgments

Thanks to Frontend Mentor for providing practical challenges that help developers improve real-world frontend skills.

---
