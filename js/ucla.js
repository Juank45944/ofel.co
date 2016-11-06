$(function(){
  $('.photo-gallery-pic').mouseenter(function(){
    $(this).find('img').addClass('hovered-img');
    $(this).find('.card-title').show('slide');
  })

  $('.photo-gallery-pic').mouseleave(function(){
    $(this).find('img').removeClass('hovered-img');
    $(this).find('.card-title').hide('slide');
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
