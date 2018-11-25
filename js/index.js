$(function(){
  $(window).scroll(function(){
    if (window.innerWidth > 360) {
      if ($(this).scrollTop()>532) {
        $('.top-bar-cont').show('blind');
      }else {
        $('.top-bar-cont').hide('blind');
      }
    }


  })

  $('.content-col')
    .mouseenter(function(){
      $(this).addClass('z-depth-2');
    })
    .mouseleave(function(){
      $(this).removeClass('z-depth-2');
    })

  $('#conoce_la_comunidad').click(function(){
      window.location.href = 'quienes_somos.html';
  })
  $('#ucla').click(function(){
      window.location.href = 'ucla.html';
  })
  $('#misiones').click(function(){
      window.location.href = 'misiones.html';
  })
  $(".button-collapse").sideNav();
  $('.modal').modal();


})
