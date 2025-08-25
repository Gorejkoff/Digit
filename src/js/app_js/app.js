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
   // if (event.target.closest('.js-show-quality')) { showQuality(event) }
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
// function showQuality(event) {
//    const tergetElement = event.target.closest('.js-hide-quality')
//    if (!tergetElement) return;
//    tergetElement.classList.add('quality__visible')
// }


// Fancybox.bind('[data-fancybox]', {});
Fancybox.bind("[data-fancybox]", {
   hideScrollbar: false,
});