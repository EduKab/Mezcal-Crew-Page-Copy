// Function to generate swiper with options
function swiper(){
    const swiper = new Swiper('.swiper', {
    // Optional parameters
        direction: 'horizontal',
        slidesPerView: 4,
        centeredSlides: 'true',
        spaceBetween: 5,
        loop: true,
        slideActiveClass: 'swiper-slide-active',
        speed: '1000',
        preloadImages: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Option autoplay
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    });
}