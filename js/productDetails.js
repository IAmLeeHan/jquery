$(function () {
  // 精彩周边 swiper
  var mySwiper = new Swiper('.swiper-containerBw', {
    // autoplay:true,
    autoplay: {
      delay: 1000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    // loop:true,
    pagination: {
      el: '.swiper-pagination',
    },
  })
  $.get('selectSpecifications.html', function (data) {

    $(".selectSpecificationsBox").html(data);

    $(document).click(function () {
      console.log("点击任意位置隐藏");

      event.stopPropagation();
      $('.selectSpecificationsBox').hide()
    })

    $('.selectSpecificationsBox').click(function () {
      console.log("点击本身阻止冒泡")
      event.stopPropagation();
    })

    $('.selectSpecificationsBox .close').click(function () {
      console.log("出来了")
      event.stopPropagation();
      $('.selectSpecificationsBox').hide()
    })

    $('.selectSpecificationsBox .submit').click(function () {
      event.stopPropagation();
      $('.selectSpecificationsBox').hide()
    })

    $('.selectSpecificationsBox .checkType .default').click(function () {
      console.log('选择版本');
      event.stopPropagation();
      $('.selectSpecificationsBox .checkType .default').removeClass('active')
      $(this).addClass('active')
    })

    $('.selectSpecificationsBox .checkColor .default').click(function () {
      console.log('选择颜色');
      event.stopPropagation();
      $('.selectSpecificationsBox .checkColor .default').removeClass('active')
      $(this).addClass('active')
    })

    $('.quantityIncreaseOrDecrease .less').click(function () {
      event.stopPropagation();
      console.log('减');
      var n = $(this).next().html();
      var num = parseInt(n) - 1;
      if (num == 0) {
        return
      }
      $(this).next().html(num);
    })

    $('.quantityIncreaseOrDecrease .plus').click(function () {
      event.stopPropagation();
      console.log('加');
      var n = $(this).prev().html();
      var num = parseInt(n) + 1;
      if (num == 0) {
        return;
      }
      $(this).prev().html(num);
    })
  })
  $('.selectSpecifications').click(function () {
    console.log('打开选择规格');
    event.stopPropagation();
    $('.selectSpecificationsBox').show()
  })
  $('.buyNow').click(function () {
    console.log('打开选择规格');
    event.stopPropagation();
    $('.selectSpecificationsBox').show()
  })


  $('.productDetails .goBBack').click(function () {
    event.stopPropagation();
    window.history.back(-1)
  })

  $('.more').click(function(){
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

  $('.collect').click(function(){
    let flag = $('.collect img').hasClass('active')
    if(flag){
      $('.collect img').removeClass('active')
      $('.collect img').attr('src','../../images/localSpecialties/star.png')
    }else{
      $('.collect img').addClass('active')
      $('.collect img').attr('src','../../images/localSpecialties//xin (2).png')
    }
  })
})