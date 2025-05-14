// Complete JavaScript Fix
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Smooth Scroll Function
    const scrollToSection = (targetId) => {
        const target = document.querySelector(targetId);
        if (target) {
            const offset = 100; // Adjust for fixed header height
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Hamburger Menu Toggle
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('active');
    });

    // Close Menu on Outside Click
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Navigation Click Handler
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Close mobile menu
            mobileMenu.classList.remove('active');
            
            // Scroll after short delay
            setTimeout(() => {
                scrollToSection(targetId);
            }, 100);
        });
    });

    // Handle initial page load with hash
    if (window.location.hash) {
        scrollToSection(window.location.hash);
    }
});
