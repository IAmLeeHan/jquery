$(function(){
  $('.more .shoucang').click(function(){
    let flag = $('.more .shoucang').hasClass('active')
    if(flag){
      $('.more .shoucang').removeClass('active')
    }else{
      $('.more .shoucang').addClass('active')
    }
  })
  $('.more .fenxiang').click(function(){
    event.stopPropagation();
    $('.shareTo').show()
  })
  $('.shareToPanel .cancel').click(function(){
    $('.shareTo').hide()
  })

  $(document).click(function(){
    $('.shareTo').hide()
  })

  $('.shareToPanel').click(function(){
    event.stopPropagation();
  })
})