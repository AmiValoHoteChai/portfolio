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
    window.scrollTo(0, 0);

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

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Synchronize scroll triggers with Lenis
    lenis.on('scroll', (e) => {
        // Can be used for extra scroll-driven effects
    });

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
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
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
