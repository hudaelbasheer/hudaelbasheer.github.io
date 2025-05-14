// scripts/app.js
document.addEventListener('DOMContentLoaded', () => {
  // Set home as default active
  document.querySelector('#home').classList.add('active-section');
  
  // Navigation click handler
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      
      // Remove active class from all
      document.querySelectorAll('section').forEach(s => 
        s.classList.remove('active-section'));
      
      // Add to target
      document.querySelector(targetId).classList.add('active-section');
      
      // Update URL
      history.pushState(null, null, targetId);
    });
  });
});
