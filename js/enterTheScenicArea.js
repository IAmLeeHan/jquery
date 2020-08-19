$(function () {

  $(window).scroll(function (offset) {
    let top = $(document).scrollTop()
    console.log(top, "off");
    if (top > 200) {
      console.log(1111);

      $('.backTop').show()
    } else {
      $('.backTop').hide()
    }
  })

  $('.Header .goBack').click(function () {
    console.log("返回上一级");

    window.history.go(-1)
  })
  $('.enterTheScenicArea .backTop').click(function () {
    window.scroll(0, 0)
    console.log(2222);

    $('.backTop').hide()
  })

  $('.Header .xin').click(function(){
    let flag = $('.Header .xin').hasClass('active')

    if(flag){
      $(this).removeClass('active')
    }else{
      $(this).addClass('active')
    }
  })

  $('.Header .fenxiang').click(function(){
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