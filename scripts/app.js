// scripts/app.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.createElement('div');
    
    // Create Mobile Menu
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="menu-content">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    `;

    // Toggle Menu Function
    const toggleMenu = () => {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    };

    // Click Handlers
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) {
            mobileMenu.style.display = 'none';
        }
    });

    // Add to DOM
    document.body.appendChild(mobileMenu);
});

// Add this CSS
const mobileMenuCSS = `
.mobile-menu {
    display: none;
    position: fixed;
    top: 70px;
    right: 20px;
    background: #1A1A1A;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    z-index: 1000;
}

.mobile-menu a {
    display: block;
    color: white;
    padding: 0.8rem 1.5rem;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.3s ease;
}

.mobile-menu a:hover {
    background: rgba(255,255,255,0.1);
}
`;

// Inject the CSS
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);
