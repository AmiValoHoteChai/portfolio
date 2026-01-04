# Portfolio Website

A modern, **brutalist-design** portfolio website showcasing software engineering projects and skills. Built with clean HTML, CSS, and JavaScript following minimalist design principles and optimized for ultra-smooth performance.

## 🎨 Design Philosophy & "Antigravity"

This portfolio embraces **Brutalist Web Design** mixed with high-performance motion:

- **Smooth Scrolling**: A custom smooth-scroll implementation using **Lenis** that makes the site feel weightless.
- **Micro-Interactions**: Elements reveal themselves with a snappy 0.4s ease-out animation as you scroll.
- **Monochrome Palette**: Pure black, white, and gray (#f5f5f5) for high contrast and readability.
- **Hard Borders**: 3px solid black borders define the structural grid.
- **Typography**: `Space Mono` for technical data, `Inter` for clean readability.
- **Modular CSS**: Architecture refactored for maximum scalability and easy maintenance.

## 🚀 Quick Start

### Local Development
1. Clone the repository
2. Open `index.html` in your browser. No build process required.

### Docker Deployment
See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions using Docker, Portainer, and Nginx Proxy Manager.

## 📁 Project Structure

```
personal-site/
├── css/                        # New Modular CSS Architecture
│   ├── main.css                # Global styles, variables, & resets
│   ├── components/             # Reusable components (buttons, cards)
│   │   └── screenshot-card.css # Terminal-style window component
│   └── projects/               # Project-specific stylesheets
│       ├── playerskills.css
│       ├── perfume.css
│       ├── healthcare.css
<!-- │       └── codefarm.css -->
├── js/
│   └── main.js                 # Lenis setup, Scroll Observers, Navigation
├── assets/                     # Images, PDFs, and media
├── projects/                   # Project detail pages
│   ├── playerskills.html       # Player Skills Plugin
│   ├── healthcare.html         # Hospital Management System
│   ├── perfume.html            # Perfume E-Commerce
<!-- │   └── codefarm.html           # Code Farm Platform -->
├── index.html                  # Main homepage
└── 404.html                    # Custom glitch-effect error page
```

## ✨ New Features

### 🌊 Smooth Scroll (Lenis)
We integrated **Lenis**, a standardized smooth scrolling library used by award-winning websites.
- **Why?** Native browser scrolling can feel "heavy." Lenis runs on the main thread but adds momentum and interpolation for a "gliding" feel.
- **Performance**: Optimized for 60fps+ with `translate3d` hardware acceleration.

### 🧱 Modular CSS Architecture
The codebase has been refactored from a single `style.css` into a scalable architecture:
- **Components**: Reusable UI elements (like the terminal-style screenshot windows) live in `css/components/`.
- **Project Isolation**: Each project page has its own dedicated CSS file in `css/projects/`, preventing style conflicts.
- **Maintainability**: Easier to upgrade specific parts of the site without breaking others.

### 📱 Interface Design Standard
All project pages now feature a **Standardized Interface Design Section**:
- **Terminal-Style Windows**: Screenshots are presented inside code-editor-like frames.
- **Consistent Layout**: Overview → Interface Design → Features flow across all pages.
- **Media-Rich**: Live screenshots for Player Skills, Perfume, and Healthcare projects.

## 🎯 Featured Projects

### 1. Healthcare Management System
- **Type**: CLI System Programming
- **Features**: Patient records, Role-based auth, File persistence.
- **Tech**: C, File I/O, Data Structures.

### 2. Perfume E-Commerce
- **Type**: Responsive Web Design
- **Features**: Product gallery, cart logic, brutalist aesthetic.
- **Tech**: HTML5, CSS3, Vanilla JS.

### 3. Player Skills Reborn Again
- **Type**: Minecraft Plugin (Java)
- **Features**: Custom GUI, RPG-style skill systems, Archery mechanics.
- **Tech**: Java, Spigot API.

<!-- 
### 4. Code Farm
- **Type**: Competitive Programming Platform
- **Features**: Real-time code execution, problem library.
- **Tech**: React, Node.js, Vite.
-->

## 🛠️ Technologies & Stack

- **Core**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries**:
    - [Lucide](https://lucide.dev/) (Icons)
- **Fonts**: Google Fonts (Inter, Space Mono)
- **Server**: Nginx (Alpine Linux)
- **Containerization**: Docker & Docker Compose

## 📄 License
© 2026 Zunait Hossain Ratul. All rights reserved.
