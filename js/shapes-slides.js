const shapesSlides = (direction) => {
  let currentSlide = document.querySelector('.shapes__item.is_current');
  let nextSlide;
  direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

  if (nextSlide) {
    shapeSlides.forEach(el => { el.classList.remove('_index'); });

    currentSlide.classList.add('_index');

    const tl = gsap.timeline({
      defaults: { ease: easing },
      onComplete: function() {
        currentSlide.classList.remove('_index');
      }
    });

    tl.from(nextSlide, 0.5, {
      xPercent: 100,
      delay: 0.5
    })
    .from(nextSlide.querySelector('.shapes__content'), 0.5, {
      xPercent: -100,
      delay: -1
    });

    currentSlide.classList.remove('is_current');
    nextSlide.classList.add('is_current');
  }
};