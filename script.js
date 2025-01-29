 // Scroll to the top function
 function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Show/hide the arrow-up button based on scroll position
  window.addEventListener('scroll', function () {
    const arrowUp = document.getElementById('arrow-up');
    if (window.scrollY > 100) {
      arrowUp.classList.add('show'); // Add class to make it visible
    } else {
      arrowUp.classList.remove('show'); // Remove class to hide it
    }
  });