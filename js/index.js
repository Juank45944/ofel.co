$(function(){
  $(window).scroll(function(){
    console.log();
    if ($(this).scrollTop()>400) {
      $('.top-bar-cont').show('blind');
    }else {
      $('.top-bar-cont').hide('blind');
    }

  })

  $('.content-col')
    .mouseenter(function(){
      $(this).addClass('z-depth-4');
    })
    .mouseleave(function(){
      $(this).removeClass('z-depth-4');
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


})
