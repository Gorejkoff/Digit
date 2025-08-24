if (document.querySelector('.main-slider__swiper-thumbs')
   && document.querySelector('.main-slider__swiper')) {
   const swiper2 = new Swiper('.main-slider__swiper', {
      loop: true,
      spaceBetween: 8,
      speed: 300,
      slidesPerView: 6,
      // grabCursor: true,
      pagination: {
         el: '.main-slider__pagination',
         type: 'bullets',
         clickable: true,
      },
   });
   const swiper = new Swiper('.main-slider__swiper-thumbs', {
      loop: true,
      spaceBetween: 40,
      speed: 300,
      slidesPerView: 1,
      grabCursor: true,
      thumbs: {
         swiper: swiper2,
      },
   });
}
if (document.querySelector('.product-swiper__thumbs')
   && document.querySelector('.product-swiper__main')) {
   const target2 = document.querySelector('.product-swiper__main');
   const swiper2 = new Swiper(target2.querySelector('.swiper'), {
      loop: true,
      spaceBetween: 8,
      speed: 300,
      slidesPerView: 4,
      // grabCursor: true,

   });
   const target = document.querySelector('.product-swiper__thumbs');
   const swiper = new Swiper(target.querySelector('.swiper'), {
      loop: true,
      spaceBetween: 40,
      speed: 300,
      slidesPerView: 1,
      grabCursor: true,
      thumbs: {
         swiper: swiper2,
      },
      navigation: {
         nextEl: '.product-swiper-next',
         prevEl: '.product-swiper-prev',
      },
   });
}


function addSwiperSection(selector) {
   if (document.querySelector(selector)) {
      const target = document.querySelector(selector);
      const swiper = new Swiper(target.querySelector('.swiper'), {
         spaceBetween: 8,
         speed: 300,
         slidesPerView: 4,
         grabCursor: true,
         navigation: {
            nextEl: target.querySelector('.swiper-next'),
            prevEl: target.querySelector('.swiper-prev'),
         },
         pagination: {
            el: target.querySelector('.swiper-pagination'),
            type: 'bullets',
            clickable: true,
         },
      });
   }
}

addSwiperSection('.news__swiper');
addSwiperSection('.feedback__swiper');
addSwiperSection('.before__swiper');

function addSwiperQuality(element) {
   const swiper = new Swiper(element.querySelector('.swiper'), {
      spaceBetween: 0,
      speed: 300,
      slidesPerView: 1,
      grabCursor: true,
      pagination: {
         el: element.querySelector('.quality__pagination'),
         type: 'bullets',
         clickable: true,
      },
   });
}
const qualitySwiper = document.querySelectorAll('.quality__swiper');
if (qualitySwiper.length > 0) { qualitySwiper.forEach(e => addSwiperQuality(e)) }

/* пример инициализации слайдера */
// if (document.querySelector('.swiper')) {
//    const swiper = new Swiper('.swiper', {
//       keyboard: {
//          enabled: true,
//          onlyInViewport: true,
//       },
//       allowTouchMove: false,
//       loop: true,
//       spaceBetween: 10,
//       speed: 300,
//       slidesPerView: 2.5,
//       slidesPerView: 'auto', // количаство слайдеров без авто ширины
//       grabCursor: true,
//       initialSlide: 2,
//       centeredSlides: true,
//       breakpoints: {
//          1024: {
//             spaceBetween: 20,
//             slidesPerView: 3
//          },
//          768: {
//             slidesPerView: 2
//          }
//       },
//       navigation: {
//          nextEl: ".next",
//          prevEl: ".prev",
//       },
//       pagination: {
//          el: '.pagination__body',
//          type: 'bullets',
//          type: 'fraction',
//          clickable: true,
//       },
//       autoplay: {
//          delay: 2000,
//       },
//       virtual: {
//          enabled: true,
//       },
//       freeMode: {
//          enabled: true,
//          momentum: false // Отключаем инерцию для точного позиционирования
//       },
//    });
// }




/* создание и ликвидация состояния слайдера в зависимости от ширины вьюпорта */
// if (document.querySelector('.swiper')) {
//    let swiperState;
//    let swiper;
//    changeStateSlider();
//    window.addEventListener('resize', () => {
//       changeStateSlider();
//    })
//    function initswiper() {
//       swiper = new Swiper('.swiper', {
//          keyboard: {
//             enabled: true,
//             onlyInViewport: true,
//          },
//          allowTouchMove: true,
//          loop: false,
//          speed: 300,
//          slidesPerView: 1.3,
//          spaceBetween: 24,
//       });
//    }
//    function changeStateSlider() {
//       if (!MIN768.matches) {
//          if (!swiperState) {
//             swiperState = true;
//             initswiper();
//          }
//       } else {
//          if (swiperState) {
//             swiperState = false;
//             swiper.destroy(true, true);
//          }
//       }
//    }
// }
