# Zunait Hossain Ratul - Portfolio Website

A modern, brutalist-design portfolio website showcasing software engineering projects and skills. Built with clean HTML, CSS, and JavaScript following minimalist design principles.

## 🎨 Design Philosophy

This portfolio embraces **brutalist web design** with:
- **Monochrome Color Scheme**: Pure black, white, and gray palette
- **Typography**: Space Mono (monospace) and Inter (sans-serif)
- **Hard Borders**: 3px solid black borders throughout
- **No Gradients**: Except for subtle effects in the 404 page
- **Grid-Based Layout**: Structured, geometric sections
- **Minimal Animations**: Smooth, purposeful transitions only

## 🚀 Quick Start

### Local Development
Simply open `index.html` in your browser. No build process required.

### Docker Deployment
See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions using Docker, Portainer, and Nginx Proxy Manager.

## 📁 Project Structure

```
personal-site/
├── index.html              # Main portfolio page
├── style.css               # Brutalist design system
├── main.js                 # Navigation & interactions
├── 404.html                # Custom error page with glitch effects
├── projects/               # Project detail pages
│   ├── healthcare.html     # Hospital Management System
│   ├── codefarm.html       # Code Farm platform
│   └── perfume.html        # Perfume E-Commerce site
├── assets/                 # Static assets (currently empty)
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose setup
├── nginx.conf              # Nginx web server config
├── DEPLOYMENT.md           # Deployment guide
└── FIXES_REPORT.md         # Bug fixes documentation
```

## ✨ Features

### Design & UX
- **Fully Responsive** - Mobile-first design, works on all devices
- **Brutalist Aesthetic** - Bold, minimalist, functional design
- **Smooth Navigation** - Fixed navbar with smooth scroll
- **Progress Bars** - Visual skill level indicators
- **Custom 404 Page** - Glitch effects and particle animations

### Technical
- **Pure HTML/CSS/JS** - No frameworks or dependencies
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance** - Fast loading with optimized assets
- **Docker Ready** - Easy deployment with Docker + Nginx
- **Accessible** - Semantic HTML and keyboard navigation

### Sections
1. **Hero** - Introduction with CTA buttons
2. **About** - Background and achievements
3. **Stats** - CGPA, Beecrowd ranking, problems solved
4. **Skills** - 6 skills with progress bars
5. **Projects** - 3 featured projects with detail pages
6. **Contact** - Email, GitHub, and resume links

## 🛠️ Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Inter, Space Mono)
- **Icons**: Lucide Icons (404 page only)
- **Server**: Nginx (Alpine Linux)
- **Containerization**: Docker & Docker Compose
- **Deployment**: Portainer + Nginx Proxy Manager

## 📝 Customization Guide

### Update Personal Information

**Contact Details** (index.html, line 201):
```html
<a href="mailto:zunaitratul@gmail.com" class="contact-link">Email</a>
```

**GitHub Username** (multiple locations):
```html
<a href="https://github.com/AmiValoHoteChai" target="_blank">GitHub</a>
```

**Domain/Logo** (index.html, line 16):
```html
<a href="#" class="nav-logo">Ratul.qzz.io</a>
```

### Update Skills

Edit the skills grid in `index.html` (lines 84-126):
```html
<div class="skill-card">
    <div class="skill-name">C</div>
    <div class="skill-level">Strong — 90%</div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

### Add New Projects

1. Create a new HTML file in `projects/` folder
2. Copy structure from existing project pages
3. Add project card to `index.html` in the Projects section
4. Update links and descriptions

### Add Resume

Place your resume PDF in the `assets/` folder:
```
assets/resume.pdf
```

The download links are already configured in:
- Hero section (line 36)
- Contact section (line 203)

## 🎯 Featured Projects

### 1. Hospital Management System
- **Tech**: C, File I/O, Data Structures
- **Type**: CLI-based system programming
- **Features**: Patient records, appointments, inventory management
- [GitHub](https://github.com/AmiValoHoteChai/Hospital-Management-System)

### 2. Perfume E-Commerce
- **Tech**: HTML, CSS, JavaScript
- **Type**: Responsive website
- **Features**: Product showcase, smooth animations, modern UI
- [Live Demo](https://amivalohotechai.github.io/Perfume-Project/) | [GitHub](https://github.com/AmiValoHoteChai/Perfume-Project)

### 3. Code Farm
- **Tech**: React, Node.js, Vite
- **Type**: Web application
- **Features**: Problem library, code editor, real-time feedback
- [GitHub](https://github.com/AmiValoHoteChai)

## 🚢 Deployment

### Prerequisites
- Ubuntu server with Docker installed
- Portainer WebUI
- Nginx Proxy Manager
- Domain name (optional)

### Quick Deploy
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/personal-site.git
cd personal-site

# Build and run with Docker Compose
docker-compose up -d --build
```

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 🐛 Bug Fixes & Updates

See [FIXES_REPORT.md](FIXES_REPORT.md) for a list of resolved issues and improvements.

## 📊 Stats & Achievements

- **CGPA**: 3.95/4.00
- **Beecrowd Ranking**: Top 4%
- **Problems Solved**: 124+
- **University**: Daffodil International University
- **Expected Graduation**: December 2028
- **Status**: Dean's Award Candidate

## 🔒 Security Features

- ✅ HTTPS ready (via Nginx Proxy Manager)
- ✅ Gzip compression enabled
- ✅ Static asset caching
- ✅ Custom error pages
- ✅ No sensitive files exposed
- ✅ Container runs as non-root user

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color Palette

```css
--black: #000000
--white: #ffffff
--gray: #f5f5f5
--gray-text: #666666
--border: 3px solid var(--black)
```

## 📄 License

© 2026 Zunait Hossain Ratul. All rights reserved.

---

## 🤝 Connect

- **Email**: zunaitratul@gmail.com
- **GitHub**: [@AmiValoHoteChai](https://github.com/AmiValoHoteChai)
- **Portfolio**: [Live Site](https://ratul.qzz.io) *(update with your domain)*

---

**Built with ❤️ using brutalist design principles**
