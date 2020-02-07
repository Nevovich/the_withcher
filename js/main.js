let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
    nextEl: '.navigation',
  },
  breakpoints: {
    // when window width is >= 640px
    540: {
      slidesPerView: 1
    }
  }
});

let menuButton = document.querySelector('.menu-btn');
let menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
	menu.classList.toggle('header-active');

});