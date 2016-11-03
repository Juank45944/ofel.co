$(function(){
  $('.photo-gallery-pic').mouseenter(function(){
    $(this).find('img').addClass('hovered-img');
    $(this).find('.card-title').show('slide');
  })

  $('.photo-gallery-pic').mouseleave(function(){
    $(this).find('img').removeClass('hovered-img');
    $(this).find('.card-title').hide('slide');
  })
})
