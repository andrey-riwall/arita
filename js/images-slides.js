const imagesSlides = (direction) => {
  let currentSlide = document.querySelector('.slide-bg__inner.is_current');
  let nextSlide;
  direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

  if (nextSlide) {
    imageSlides.forEach(el => { el.classList.remove('_index'); });

    currentSlide.classList.add('_index');

    const tl = gsap.timeline({
      defaults: { ease: easing },
      onComplete: function() {
        currentSlide.classList.remove('_index');
      }
    });

    tl.from(nextSlide, 0.5, {
      xPercent: 100
    })
    .from(nextSlide.querySelector('.slide-bg__link'), 0.5, {
      xPercent: -100,
      delay: -0.5
    });

    currentSlide.classList.remove('is_current');
    nextSlide.classList.add('is_current');
  }
};