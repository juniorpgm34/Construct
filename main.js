/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
    loop: true,
    cssMode: true,
    navegation: {
        nextEl:"swiper-button-next",
        prevEl:"swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination'
    },
    slidesPerView: 1,
    mousewhell: true,
    keyboard: true,
 
  })