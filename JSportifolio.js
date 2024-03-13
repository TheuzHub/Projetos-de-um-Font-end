document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const target = document.querySelector(link.getAttribute('href'));
        sections.forEach(section => {
          section.classList.remove('section-active');
          section.style.opacity = 0;
        });
        target.classList.add('section-active');
        target.style.opacity = 1;
      });
    });
  });
  