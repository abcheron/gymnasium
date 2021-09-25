$(function (){


  $('#banner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:false,
    autoplay:false,
  });

  $('.venobox').venobox(); 

  $('.autoplay').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:575.98,
        settings: {
          autoplay:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // counter js

  $('.count_up').counterUp({
    delay: 10,
    time: 1000
});

$('.logo_active').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  adaptiveHeight: true,
  arrows:true,
  autoplay:true,
  prevArrow:'<i class="fas fa-chevron-left prev_left"></i>',
  nextArrow:'<i class="fas fa-chevron-right prev_right"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
      }
    },
    {
      breakpoint:575.98,
      settings: {
        autoplay:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        autoplay:false,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// logo

$('.team_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:false,
  autoplaySpeed: 2000,
  arrows:false,
  dots:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:767.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:575.98,
      settings: {
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  

     });

});