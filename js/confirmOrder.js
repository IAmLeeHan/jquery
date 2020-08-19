$(function(){
  // $('.confirmOrder .less').click(function () {
  //   event.stopPropagation();
  //   console.log('减');
  //   var n = $(this).next().html();
  //   var num = parseInt(n) - 1;
  //   if (num == 0) {
  //     return
  //   }
  //   $(this).next().html(num);
  // })

  // $('.confirmOrder .plus').click(function () {
  //   event.stopPropagation();
  //   console.log('加');
  //   var n = $(this).prev().html();
  //   var num = parseInt(n) + 1;
  //   if (num == 0) {
  //     return;
  //   }
  //   $(this).prev().html(num);
  // })

  $('.confirmOrder .payType').click(function(){
    console.log(111111);
    event.stopPropagation();
    $('.confirmOrder .paymentMethod .check').removeClass('active')
    $(this).find('.check').addClass('active')
  })
})