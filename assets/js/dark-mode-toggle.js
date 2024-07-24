// assets/js/dark-mode-toggle.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const currentMode = localStorage.getItem('dark-mode') === 'true';
  
    // Apply the saved mode on page load
    if (currentMode) {
      document.body.classList.add('dark-mode');
    }
  
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Save the current mode in localStorage
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });
  });
  