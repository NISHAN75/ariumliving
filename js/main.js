// featured slider active
$(".featured-slider").owlCarousel({
    nav:true,
    margin:20,
    // navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    loop:true,
    autoplay:false,
    dots:false,
    responsive: {
      0: {
        items: 1 // Number of items to show on small screens
      },
      600: {
        items: 2 // Number of items to show on medium screens
      },
      1000: {
        items: 3 // Number of items to show on large screens
      }
    }
  });
// popup active
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });

   // Initialize Magnific Popup
   $('.popup-btn').magnificPopup({
    items: {
        src: '#contact-form', // ID of the contact form container
        type: 'inline'
    },
    // Other options you can customize
});
$('#close-btn').on('click', function() {
  $.magnificPopup.close();
});
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

  