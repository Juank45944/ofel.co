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
    .click(function(){
      window.location.href = 'ucla.html';
    })


})
