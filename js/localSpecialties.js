$(function () {
  var mySwiper = new Swiper('.swiper-containerBw1', {
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
  var mySwiper = new Swiper('.swiper-containerBw2', {
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
 
  
  $('.leftBtn').click(function(){
    window.history.go(-1)
  })
  $('.productItem').click(function(){
    window.location.href = 'productDetails.html'
  })
 
  $('.showDetail').click(function(){
    console.log("11111111111");
    
    $('.detail').show()
  })
  $(document).click(function(){
    $('.detail').hide()
  })
  $('.showDetail').click(function(){
    event.stopPropagation();
  })
  
});