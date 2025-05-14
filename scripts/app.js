// In app.js
const filterProjects = (tech) => {
  document.querySelectorAll('.project-card').forEach(project => {
    project.style.display = project.textContent.includes(tech) ? 'block' : 'none';
  });
};
