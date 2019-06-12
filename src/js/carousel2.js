
var car_items = $(".car-item__gallery");
var owl2 = $(".carousel2");
/**
 * Инициализация карусели
 */

owl2.owlCarousel({
    loop: true,
    thumbs: false,
    nav:true,
    // autoWidth:true,
    autoplay: false,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    items: 1,
    lazyLoad: true,
    itemsDesktop: ["100%", 1],
    itemsDesktopSmall: ["100%", 1],
    itemsMobile: ["100%", 1],
    itemsTablet: ["100%", 1],
    doots: true,
    navText: [ , ]
});

