$(function(){
  $('.photo-gallery-pic').mouseenter(function(){
    $(this).find('img').addClass('hovered-img');
    $(this).find('.card-title').show('slide');
  })

  $('.photo-gallery-pic').mouseleave(function(){
    $(this).find('img').removeClass('hovered-img');
    $(this).find('.card-title').hide('slide');
  })
  $('.carousel').carousel({
    full_width: true
  });
  next_pic();
})



function next_pic(){
  setTimeout(function(){
    $('.carousel').carousel('next')
    next_pic()
  }, 5000);
}
