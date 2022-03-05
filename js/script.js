try {
   const sliderThumbs = new Swiper('.slider-thumbs', {
      spaceBetween: 20,
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      loopedSlides: 4,
   });

   sliderThumbs.on('click', (swiper) => {
      swiper.slideTo(swiper.clickedIndex)
   });

   const sliderMain = new Swiper('.slider-main', {
      loop: true,
      spaceBetween: 10,
      loopedSlides: 4,
   });

   sliderThumbs.controller.control = sliderMain;
   sliderMain.controller.control = sliderThumbs;
} catch {
   console.log()
}