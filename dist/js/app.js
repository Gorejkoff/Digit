"use strict"

// window.addEventListener('load', (event) => {});

// desktop or mobile (mouse or touchscreen)
const isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i) },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i) },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i) },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i) },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i) },
   any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
   }
};
const isPC = !isMobile.any();
if (isPC) { document.body.classList.add('_pc') } else { document.body.classList.add('_touch') };

// media queries
const MIN1024 = window.matchMedia('(min-width: 1024px)');
const MIN768 = window.matchMedia('(min-width: 768px)');

// variables
// const HEADER = document.getElementById('header');



/* запись переменных высоты элементов */
// function addHeightVariable() {
//    if (typeof HEADER !== "undefined") {
//       document.body.style.setProperty('--height-header', `${HEADER.offsetHeight}px`)
//    }
// }
// addHeightVariable();


// ** ======================= CLICK ======================  ** //
document.documentElement.addEventListener("click", (event) => {
   if (event.target.closest('.js-open-menu')) { openHeaderMenu() }
   if (!event.target.closest('.header')) { closeSearch() }
   if (event.target.closest('.js-open-search')) { openSearch() }
   if (event.target.closest('.js-production-show')) { showProductionNextList(event) }
   if (event.target.closest('.js-show-quality')) { showQuality(event) }
})

function openHeaderMenu() {
   document.body.classList.toggle('menu-is-open');
   closeSearch();
}
function closeHeaderMenu() {
   document.body.classList.remove('menu-is-open')
}
function openSearch() {
   document.body.classList.toggle('search-is-open');
   closeHeaderMenu();
}
function closeSearch() {
   document.body.classList.remove('search-is-open')
}
function showProductionNextList(event) {
   const group = event.target.closest('.js-production-group');
   if (!group) { return };
   const hidden = group.querySelectorAll('.hidden');
   if (hidden.length == 0) {
      removeButtonProductionShow(event)
      return;
   }
   if (hidden.length == 1) {
      removeButtonProductionShow(event)
   };
   hidden[0].classList.remove('hidden');
}
function removeButtonProductionShow(event) {
   event.target.closest('.js-production-show').classList.add('hidden');
}
function showQuality(event) {
   const tergetElement = event.target.closest('.js-hide-quality')
   if (!tergetElement) return;
   tergetElement.classList.add('quality__visible')
}



if (document.querySelector('.main-slider__swiper-thumbs')
   && document.querySelector('.main-slider__swiper')) {
   const swiper2 = new Swiper('.main-slider__swiper', {
      loop: true,
      spaceBetween: 8,
      speed: 300,
      slidesPerView: 2,
      // grabCursor: true,
      pagination: {
         el: '.main-slider__pagination',
         type: 'bullets',
         clickable: true,
      },
      breakpoints: {
         1024: {
            slidesPerView: 6
         },
         768: {
            slidesPerView: 5
         },
         550: {
            slidesPerView: 4
         },
         400: {
            slidesPerView: 3
         }
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
         slidesPerView: 1.2,
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
         breakpoints: {
            1024: {
               slidesPerView: 4
            },
            768: {
               slidesPerView: 3
            }
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



class TabsSwitching {
   constructor(button_name, tab_name, execute) {
      this.name_button = button_name;
      this.list_buttons = document.querySelectorAll(button_name);
      this.list_tabs = document.querySelectorAll(tab_name);
      this.execute = execute;
   }
   init = () => {
      document.body.addEventListener('click', (event) => {
         if (event.target.closest(this.name_button)) {
            actionTabsSwitching(event, event.target.closest(this.name_button), this.list_buttons, this.list_tabs, this.execute)
         }
      })
   }
}
function actionTabsSwitching(event, target_button, list_buttons, list_tabs, execute) {
   let number = target_button.dataset.button_ts;
   if (!number) return;
   list_buttons.forEach((e) => { e.classList.toggle('active', e.dataset.button_ts == number) });
   if (list_tabs.length > 0) { list_tabs.forEach((e) => { e.classList.toggle('active', e.dataset.tab_ts == number) }) }
   if (execute) { this.execute(event) };
}
function addTabsSwitching(button_name, tab_name, fn_name) {
   if (document.querySelector(button_name) && document.querySelector(tab_name)) {
      let tab = new TabsSwitching(button_name, tab_name, fn_name);
      tab.init();
   }
}

addTabsSwitching('.our-work__tab-button', '.our-work__tab-image')
addTabsSwitching('.product-tabs__button', '.product-tabs__content')




