document.addEventListener('DOMContentLoaded', () => {
  const sliderImages = document.querySelectorAll('.slider img');
  
  if (sliderImages.length > 0) {
    let currentIndex = 0;

    setInterval(() => {
      sliderImages[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % sliderImages.length;
      sliderImages[currentIndex].classList.add('active');
    }, 4000);
  }

  const fadeElements = document.querySelectorAll('.fade');
  const fadeScrollListener = () => {
    const windowHeight = window.innerHeight;
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        el.classList.add('show');
      }
    });
  };

  fadeScrollListener();
  window.addEventListener('scroll', fadeScrollListener);
});