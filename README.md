# RediFinalProject-C.Soto-
# 👨‍🍳 A SINGLE PAGE CULINARY EXPERIENCE

**Web Development Fundamentals Project - Christian Soto**

A single-page interactive website designed to bridge the gap between professional culinary expertise and home cooking. This project demonstrates DOM manipulation, API fetching, responsive design, and modular JavaScript architecture.

## 🚀 Project Overview

The website features a curated list of recipes, a "Top 6 of the Week" selection, and a spotlight on the team of chefs. The application is built as a Single Page Application (SPA), allowing users to navigate sections smoothly without reloading the page.

### Key Features
* **Weekly Rotation:** Randomly displays a selection of recipes.
* **Top 6 Recipes:** Filters and displays the top 6 chef-approved recipes dynamically via JavaScript.
* **Chef Bios:** Interactive team section where clicking a chef's image reveals their specific biography.
* **User System:** A mockup Login/Register modal window with form validation.
* **Responsive Design:** Fully adaptive layout for Desktop, Tablet, and Mobile.

## 🛠 Technologies Used

* **HTML5:** Semantic structure.
* **CSS3:** Flexbox, Grid, and Media Queries for responsiveness.
* **JavaScript:** `fetch` API, Array methods, Event Listeners, and DOM manipulation.
* **JSON:** 

## 📂 File Structure & Organization

The project uses a modular JavaScript approach to keep concerns separated:

```text
/project-root
│
├── index.html            # Main markup structure
│
├── assets/
│   └── images/           # All food and chef photography
│
├── css/
│   ├── Style.css         # Core variables, typography, and base layout
│   └── Responsive.css    # Media queries for mobile/tablet adaptations
│
└── js/
    ├── api.js            # Handles fetch requests to local JSON data
    ├── Btn-recipes.js    # Logic for recipe filtering buttons (Top 6 vs Weekly)
    ├── Btn-responsive.js # Logic for mobile navigation menu (Hamburger menu)
    └── Main.js           # Entry point: initializes events and loads initial data
