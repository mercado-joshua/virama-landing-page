"use strict";

var reviewBox = function reviewBox() {
  var swiper = new Swiper('[data-js-swiper]', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      640: {
        slidesPerView: 2
      }
    }
  });
};

document.addEventListener('readystatechange', function (event) {
  if (event.target.readyState === 'complete') reviewBox();
});