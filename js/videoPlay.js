$(function(){
  $('.menu li').click(function(){
    $('.menu li').removeClass('active')
    $(this).addClass('active')
  })
  $.get('videoReply.html',function(data){
    $('.replyPanel').html(data)
  })
  $('.comment').click(function(){
    // alert(11111)
    event.stopPropagation();
    $('.replyPanel').show()
  })
  $(document).click(function(){
    $('.replyPanel').hide()
  })
  $('.replyPanel').click(function(){
    event.stopPropagation();
  })
  $('.goBack').click(function(){
    window.history.go(-1)
  })
  $('.btnBox .like').click(function(){
    let flag = $(this).hasClass('active')
    if(flag){
      $(this).removeClass('active')
      $(this).find('img').attr('src','../../images/videoPage/zan_icon_shipin.png')
    }else{
      $(this).addClass('active')
      $(this).find('img').attr('src','../../images/scenicTour/xin.png')
    }
  })
  $('.btnBox .shareIt').click(function(){
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
  $('.avatar img').click(function(){
    $('.avatar .plus').hide()
  })
})