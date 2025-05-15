document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav-menu');
    const navIcon = document.querySelector('.nav-icon');

    navIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navIcon.querySelector('i').classList.toggle('fa-bars');
        navIcon.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu on link click (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if(navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navIcon.querySelector('i').classList.add('fa-bars');
                navIcon.querySelector('i').classList.remove('fa-times');
            }
        });
    });
});
