const init = () => {

  window.onload = function() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader_animation');

    setTimeout(() => {
      preloader.classList.remove('preloader_animation');
      preloader.classList.add('preloader_hidden');
    }, 3000);

    setTimeout(() => {
      startAnimation();
      preloader.classList.add('preloader_none');
    }, 3200);
  };

  const showNextSlide = () => {
    bgSlides('down');
    imagesSlides('down');
    shapesSlides('down');
    textSlides('down');
  }

  const showPrevSlide = () => {
    bgSlides('up');
    imagesSlides('up');
    shapesSlides('up');
    textSlides('up');
  }

  if (window.innerWidth >= 768) {
    window.addEventListener('wheel', (e) => {

      let delta = -e.deltaY;

      // UP
      if (delta > 0) {
        if (helperInput.value == '1') {
          helperInput.value = 0;
          showPrevSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }
      }
      // DOWN
      else {
        if (helperInput.value == '1') {
          helperInput.value = 0;
          showNextSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }
      }

    });
  } else {
    document.addEventListener('swiped-left', () => {
      if (helperInput.value = 1) {
        helperInput.value = 0;
        showNextSlide();
        setTimeout(() => {
          helperInput.value = 1;
        }, 1500);
      }
    });

    document.addEventListener('swiped-right', () => {
      if (helperInput.value = 1) {
        helperInput.value = 0;
        showPrevSlide();
        setTimeout(() => {
          helperInput.value = 1;
        }, 1500);
      }
    });
  }

};

init();