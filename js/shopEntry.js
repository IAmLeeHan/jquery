$(function () {
  // 商家相册
  var mySwiper = new Swiper('.swiper-containerMA', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
  // 商家相册
  var mySwiper = new Swiper('.swiper-containerHR', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
  $('.goBack').click(function(){
    window.history.go(-1)
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
})