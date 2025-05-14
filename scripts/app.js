// Initialize active section
document.addEventListener('DOMContentLoaded', () => {
  // Set home as default active
  document.querySelector('.nav-links a[href="#home"]').classList.add('active');
});

// Handle navigation clicks
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all links
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    
    // Get target section
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('active-section');
      section.classList.add('hidden-section');
    });
    
    // Show target section
    targetSection.classList.remove('hidden-section');
    targetSection.classList.add('active-section');
    
    // Update URL without reload
    history.pushState(null, null, targetId);
    
    // Add active class to clicked link
    this.classList.add('active');
  });
});

// Handle browser back/forward
window.addEventListener('popstate', () => {
  const currentHash = window.location.hash;
  const activeLink = document.querySelector(`.nav-links a[href="${currentHash}"]`);
  if(activeLink) activeLink.click();
});
