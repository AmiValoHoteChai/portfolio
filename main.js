// Simple navigation for brutalist design
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

        // Smooth scroll
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').slice(1);
                    const target = document.getElementById(targetId);
                    if (target) {
                        const offset = target.offsetTop - 60;
                        window.scrollTo({ top: offset, behavior: 'smooth' });
                        this.navLinks.classList.remove('active');
                        if (this.mobileToggle) this.mobileToggle.textContent = 'MENU';
                    }
                }
            });
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();

    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
