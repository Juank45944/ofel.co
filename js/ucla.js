$(function(){
  $(".button-collapse").sideNav();
  $('.photo-gallery-pic').mouseenter(function(){
    $(this).find('img').addClass('hovered-img');
    $(this).find('.card-title').show('slide');
  })

  $('.photo-gallery-pic').mouseleave(function(){
    $(this).find('img').removeClass('hovered-img');
    $(this).find('.card-title').hide('slide');
  })
  $('.boy img').mouseenter(function(){
    $(this).parent().prev().show('fade');
  })
  $('.boy img').mouseleave(function(){
    $(this).parent().prev().hide('fade');
  })
  $('.modal').modal();
  $('.voluntario').click(function(){

  })


  $('.galeria-slider').slick({
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})
