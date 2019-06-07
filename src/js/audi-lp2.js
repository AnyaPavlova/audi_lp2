$(document).ready(function() {   


  $(".carousel").owlCarousel({
    loop: false,
    thumbs: false,
    // nav:true,
    // autoWidth:true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    lazyLoad: true,
    itemsDesktop: ["100%", 1],
    itemsDesktopSmall: ["100%", 1],
    itemsMobile: ["100%", 1],
    itemsTablet: ["100%", 1],
    URLhashListener:true,
    startPosition: 'q8'
  });

});