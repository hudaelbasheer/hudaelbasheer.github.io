document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Toggle Mobile Menu
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                mobileMenu.classList.remove('active');
            }
        });
    }

    // Smooth Scroll to Sections
    const scrollToSection = (targetId) => {
        const target = document.querySelector(targetId);
        if (target) {
            const offset = 100;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Handle anchor link clicks
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            mobileMenu.classList.remove('active');
            setTimeout(() => scrollToSection(targetId), 100);
        });
    });

    // Scroll on page load with hash
    if (window.location.hash) {
        scrollToSection(window.location.hash);
    }
});
