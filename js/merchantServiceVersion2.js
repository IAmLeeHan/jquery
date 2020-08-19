$(function(){
  $('.goBack').click(function(){
    console.log(11111);
    
    window.history.go(-1)
  })
  $('.productSpecifications').click(function(){
    window.location.href = 'shopEntry.html'
  })
  // 精彩周边 swiper
  // var mySwiper = new Swiper('.swiper-containerBw', {
  //   // autoplay:false,
  //   autoplay: {
  //     delay: 1000,
  //     stopOnLastSlide: false,
  //     disableOnInteraction: true,
  //   },
  //   // loop:true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  // })


  $('.select').click(function(){
    event.stopPropagation();
    console.log(33333);
    
    $('.shadow').show()
    var top = $(document).scrollTop();
    $(document).on('scroll.unable', function (e) {
      $(document).scrollTop(top);
    })
  })
  $('.selectListBox').click(function(){
    event.stopPropagation();
  })
  $(document).click(function(){
    $('.shadow').hide()
    $(document).unbind("scroll.unable");
  })

  $('.shadow').click(function(){
    event.stopPropagation();
    $('.shadow').hide()
    $(document).unbind("scroll.unable");
    console.log(111111111111);
    
  })

  /* 列表筛选按钮 */
  $('.select p').click(function(){
    $('.select p').removeClass('active')
    $('.select p').find('img').attr('src','../../images/tickets/down back_999.png')
    $('.selectList').hide()
    let index = $(this).attr('name')
    console.log(index,"index");
    switch (index) {
      case 'name':
        $('.select .all').addClass('active')
        $('.select .all').find('img').attr('src','../../images/tickets/down back.png')
        $('.selectListBox .name').show()
        break;
      case 'type':
        $('.select .seType').addClass('active')
        $('.select .seType').find('img').attr('src','../../images/tickets/down back.png')
        $('.selectListBox .type').show()
        break;
      default:
        break;
    }
  })


  $('.shadow .selectListBox .name h3').click(function(){
    event.stopPropagation();
    let text = $(this).text()
    $('.shadow .selectListBox .name h3').removeClass('checked')
    $(this).addClass('checked')
    $('.select .all span').html(text)
  })

  $('.shadow .selectListBox .type h3').click(function(){
    event.stopPropagation();
    let text = $(this).text()
    $('.shadow .selectListBox .type h3').removeClass('checked')
    $(this).addClass('checked')
    $('.select .seType span').html(text)
  })
})
