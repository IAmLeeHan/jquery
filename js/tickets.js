$(function () {
  $.get('selectedPanel.html',function(data){
    $('.selected').html(data)
    $('.selectBox').click(function(){
      event.stopPropagation();
      $('.selected').show()
    })
    $('.selectedPanel').click(function(){
      event.stopPropagation();
    })
    $(document).click(function(){
      $('.selected').hide()
    })

    /* 列表筛选按钮 */
    $('.sonAllTickets .selectBox p').click(function(){
      $('.sonAllTickets .selectBox p').removeClass('active')
      $('.sonAllTickets .selectBox p').find('img').attr('src','../../images/tickets/down back_999.png')
      $('.list').hide()
      let index = $(this).attr('name')
      console.log(index,"index");
      switch (index) {
        case 'all':
          $('.sonAllTickets .selectBox .all').addClass('active')
          $('.sonAllTickets .selectBox .all').find('img').attr('src','../../images/tickets/down back.png')
          $('.selectedPanel .listAll').show()
          break;
        case 'smartSorting':
          $('.sonAllTickets .selectBox .smartSorting').addClass('active')
          $('.sonAllTickets .selectBox .smartSorting').find('img').attr('src','../../images/tickets/down back.png')
          $('.selectedPanel .listSort').show()
          break;
        case 'filter':
          $('.sonAllTickets .selectBox .filter').addClass('active')
          $('.sonAllTickets .selectBox .filter').find('img').attr('src','../../images/tickets/down back.png')
          $('.selectedPanel .filterList').show()
          break;
        default:
          break;
      }
    })

    /* 筛选列表点击 */

    $('.listAll p').click(function(){
      let text = $(this).text()
      $('.listAll p').removeClass('active')
      $(this).addClass('active')
      $('.selectBox .all span').html(text)
    })

    $('.listSort p').click(function(){
      let text = $(this).text()
      $('.listSort p').removeClass('active')
      $(this).addClass('active')
      $('.selectBox .smartSorting span').html(text)
    })

    $('.filterList .btn p').click(function(){
      let text = $(this).text()
      $('.filterList .btn p').removeClass('active')
      $(this).addClass('active')
      $('.selectBox .filter span').html(text)
    })

    $('.btn2 .clear').click(function(){
      $('.filterList h3').html('筛选')
      $('.filterList .btn p').removeClass('active')
    })

    $('.btn2 .submit').click(function(){
      event.stopPropagation();
      $('.selected').hide()
    })
  })
  // 精彩周边 swiper
  var mySwiper = new Swiper('.swiper-containerBw', {
    // autoplay:true,
    autoplay:{
      delay: 1000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    // loop:true,
    pagination: {
      el: '.swiper-pagination',
    },
  })
  // 人气必玩 swiper
  var mySwiper = new Swiper('.swiper-containerP', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
  $('.ticketItem').click(function(){
    window.location.href = 'ticketEntry.html'
  })
  $('.btnBox .btn').click(function(){
    window.location.href = 'bookTickets.html'
  })
  $('.goBack').click(function(){
    window.history.go(-1)
  })
})