$(function(){
  $('.shippingAddress li').click(function(){
    let isActive = $(this).children('.checked').hasClass('active')
    isActive?$(this).children('.checked').removeClass('active'):$(this).children('.checked').addClass('active')
  })

  $('.selectAll .checked').click(function(){
    $(this).hasClass('active')?$('.checked').removeClass('active'):$('.checked').addClass('active')
  })

})