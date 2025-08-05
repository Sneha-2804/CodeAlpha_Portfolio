// Smooth scroll for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Optional: Handle form submission (demo only)
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your message!');
  });
  