document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  function checkVisibility() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('visible');
      }
    });
  }
  
  checkVisibility();
  
  window.addEventListener('scroll', checkVisibility);
});



document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.statistics__count');

  function animateCounter(counter) {
    const target = +counter.dataset.target;
    const duration = 2000;
    const stepTime = 20;  
    let current = 0;
    const steps = duration / stepTime;
    const increment = target / steps;
    
    counter.classList.add('animate');
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        current = target;
        setTimeout(() => counter.classList.remove('animate'), 300);
      }
      counter.textContent = Math.floor(current);
    }, stepTime);
  }
  
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      counters.forEach(animateCounter);
      observer.disconnect();
    }
  });
  
  observer.observe(document.querySelector('.statistics'));
});