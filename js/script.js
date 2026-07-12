const initializeNavigation = () => {
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.nav-links--left');
  const navigationLinks = document.querySelectorAll('.nav-links a');

  if (!menuButton || !mobileMenu) return;

  const setMenuState = (isOpen) => {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    mobileMenu.classList.toggle('open', isOpen);
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  navigationLinks.forEach((link) => link.addEventListener('click', () => setMenuState(false)));
};

const initializeRevealAnimations = () => {
  const revealElements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
};

const initializeSlideshow = () => {
  const slideshow = document.querySelector('.slideshow');
  if (!slideshow) return;

  const slides = [...slideshow.querySelectorAll('.slide')];
  const currentSlide = slideshow.querySelector('[data-slide-current]');
  const totalSlides = slideshow.querySelector('[data-slide-total]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let autoplayId;

  if (slides.length < 2 || !currentSlide || !totalSlides) return;

  totalSlides.textContent = slides.length;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === activeIndex);
    });
    currentSlide.textContent = activeIndex + 1;
  };

  const stopAutoplay = () => window.clearInterval(autoplayId);
  const startAutoplay = () => {
    stopAutoplay();
    if (!reducedMotion.matches) {
      autoplayId = window.setInterval(() => showSlide(activeIndex + 1), 1000);
    }
  };
  const resetAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  slideshow.querySelectorAll('[data-slide-direction]').forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.dataset.slideDirection === 'next' ? 1 : -1;
      showSlide(activeIndex + direction);
      resetAutoplay();
    });
  });

  slideshow.addEventListener('mouseenter', stopAutoplay);
  slideshow.addEventListener('mouseleave', startAutoplay);
  slideshow.addEventListener('focusin', stopAutoplay);
  slideshow.addEventListener('focusout', (event) => {
    if (!slideshow.contains(event.relatedTarget)) startAutoplay();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAutoplay();
    else startAutoplay();
  });

  startAutoplay();
};

initializeNavigation();
initializeRevealAnimations();
initializeSlideshow();

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
