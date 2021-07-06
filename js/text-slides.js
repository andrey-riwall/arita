const textSlides = (direction) => {
  let currentSlide = document.querySelector('.slides-container__slide.is_active');
  let nextSlide;
  direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

  if (nextSlide && !nextSlide.classList.contains('main-section__explore')) {

    const tl = gsap.timeline({ defaults: { ease: easing }});

    tl.to(currentSlide.querySelector('.slides-container__title'), 0.6, {
      opacity: 0,
      y: 100
    })
    .to(currentSlide.querySelector('.designers__info'), 0.6, {
      opacity: 0,
      y: 100
    }, '-=0.6')
    .to(nextSlide.querySelector('.slides-container__title'), 0.6, {
      opacity: 1,
      y: 0
    }, '-=0.1')
    .to(nextSlide.querySelector('.designers__info'), 0.6, {
      opacity: 1,
      y: 0
    }, '-=0.5');

    currentSlide.classList.remove('is_active');
    nextSlide.classList.add('is_active');
  }
};