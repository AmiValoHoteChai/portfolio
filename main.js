// Navigation & Interactive Logic
class Navigation {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.mobileToggle = document.getElementById('navToggle');
        this.navLinks = document.getElementById('navLinks');
        this.links = document.querySelectorAll('.nav-link');

        if (this.nav) this.init();
    }

    init() {
        // Mobile menu toggle
        if (this.mobileToggle) {
            this.mobileToggle.addEventListener('click', () => {
                this.navLinks.classList.toggle('active');
                this.mobileToggle.textContent = this.navLinks.classList.contains('active') ? 'CLOSE' : 'MENU';
            });
        }

        // Navigation links close mobile menu
        this.links.forEach(link => {
            link.addEventListener('click', () => {
                this.navLinks.classList.remove('active');
                if (this.mobileToggle) this.mobileToggle.textContent = 'MENU';
            });
        });
    }
}

// Antigravity Scroll Logic
const initAntigravity = () => {
    // 1. Initialize Lenis Smooth Scroll
    // Initialize Lenis with scroll restoration fix
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    // Handle Initial Hash Scroll
    if (window.location.hash) {
        // If there's a hash, scroll to it smoothly
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            // Tiny timeout to ensure layout is ready
            setTimeout(() => {
                lenis.scrollTo(targetElement, { offset: -100, immediate: true });
            }, 0);
        }
    } else {
        // Otherwise, force top
        window.scrollTo(0, 0);
    }

    // Theme Toggle Logic
    const createThemeToggle = () => {
        // ... (rest of theme toggle logic) ...
        const btn = document.createElement('button');
        btn.className = 'nav-link theme-toggle';
        btn.textContent = 'THEME: LIGHT';

        // Append to nav links
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
            navLinks.appendChild(btn);
        }

        // Check preference
        const savedTheme = localStorage.getItem('theme');

        const updateTheme = (isDark) => {
            if (isDark) {
                document.documentElement.setAttribute('data-theme', 'midnight');
                btn.textContent = 'THEME: NOIR';
            } else {
                document.documentElement.removeAttribute('data-theme');
                btn.textContent = 'THEME: LIGHT';
            }
        };

        if (savedTheme === 'midnight') {
            updateTheme(true);
        }

        btn.addEventListener('click', () => {
            const isCurrentlyDark = document.documentElement.getAttribute('data-theme') === 'midnight';
            const newTheme = !isCurrentlyDark;
            updateTheme(newTheme);
            localStorage.setItem('theme', newTheme ? 'midnight' : 'light');

            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const navToggle = document.querySelector('.nav-toggle');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (navToggle) navToggle.textContent = 'MENU';
            }
        });
    };

    createThemeToggle();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Synchronize scroll triggers with Lenis
    lenis.on('scroll', (e) => {
        // Can be used for extra scroll-driven effects
    });

    // Handle Anchor Links with Lenis
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const navToggle = document.querySelector('.nav-toggle');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (navToggle) navToggle.textContent = 'MENU';
            }

            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    lenis.scrollTo(targetElement, { offset: -100 });
                }
            }
        });
    });

    // Handle Logo Click (Scroll to Top if on same page)
    const logoLink = document.querySelector('.nav-logo');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const navToggle = document.querySelector('.nav-toggle');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (navToggle) navToggle.textContent = 'MENU';
            }

            // Check if we are on the page the logo points to
            // Using href vs location.href comparison
            if (logoLink.href === window.location.href.split('#')[0]) {
                e.preventDefault();
                lenis.scrollTo(0); // Scroll to top
            }
        });
    }

    // 2. Global Reveal Animations
    const revealSections = document.querySelectorAll('.reveal');
    const skillBars = document.querySelectorAll('.skill-progress');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // If it's a section containing skill bars, trigger them too
                const bars = entry.target.querySelectorAll('.skill-progress');
                bars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            } else {
                // Persistent effect: reset on scroll out
                entry.target.classList.remove('active');

                const bars = entry.target.querySelectorAll('.skill-progress');
                bars.forEach(bar => bar.style.width = '0');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    });

    revealSections.forEach(section => revealObserver.observe(section));
};

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    initAntigravity();

    // Initialize Lucide icons if present
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
