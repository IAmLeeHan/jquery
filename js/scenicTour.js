$(function () {
  $('.scenicTour .scenicItem').click(function () {
    window.location.href = 'enterTheScenicArea.html'
  })

  // 精彩周边 swiper
  var mySwiper = new Swiper('.swiper-containerBw', {
    // autoplay:false,
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

  // $.get('selectedPanelDL.html', function (data) {
  //   $('.selected').html(data)
  //   $('.select').click(function () {
  //     event.stopPropagation();
  //     // alert(1111)
  //     $('.selected').show()
  //   })
  //   $('.selectedPanel').click(function () {
  //     event.stopPropagation();
  //   })
  //   $(document).click(function () {
  //     $('.selected').hide()
  //   })
  // })
  /* 下拉框 */
  $('.nameAndSelect .select').click(function () {
    let flag = $('.nameAndSelect .select').hasClass('active')
    event.stopPropagation();
    if (flag) {
      console.log(flag, '1111');
      $('.nameAndSelect .select').removeClass('active')
      $('.shadow').hide()

      $(document).unbind("scroll.unable");

    } else {
      console.log(flag, '2222');

      $('.nameAndSelect .select').addClass('active')
      $('.shadow').show()

      var top = $(document).scrollTop();
      $(document).on('scroll.unable', function (e) {
        $(document).scrollTop(top);
      })
    }
  })
  $(document).click(function () {
    event.stopPropagation();
    $('.nameAndSelect .shadow').hide()
    $(document).unbind("scroll.unable");
    $('.nameAndSelect .select').removeClass('active')
  })
  $('.nameAndSelect .shadow .list').click(function () {
    event.stopPropagation();
  })
  $('.nameAndSelect .list p').click(function(){
    $('.nameAndSelect .list p').removeClass('active')
    $(this).addClass('active')
    $('.nameAndSelect .select span').html($(this).text())
  })
})