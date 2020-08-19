$(function(){
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
  $('.bookTickets .payType').click(function(){
    console.log(111111);
    
    $('.bookTickets .paymentMethod .check').removeClass('active')
    $(this).find('.check').addClass('active')
  })
  $('.bookTickets .btnBox').click(function(data){
    event.stopPropagation();
    let flag = $('.btnBox img').hasClass('active')
    console.log(flag,'flag');
    
    if(flag){
      $('.btnBox img').removeClass('active')
      $('.btnBox img').attr('src','../../images/localSpecialties/top.png')
      $('.bookTickets .title').removeClass('bg')
      $('.bookTickets .detail').hide()
    }else{
      $('.btnBox img').addClass('active')
      $('.btnBox img').attr('src','../../images/tickets/down back.png')
      $('.bookTickets .title').addClass('bg')
      $('.bookTickets .detail').show()
    }
  })
  $(document).click(function(){
    $('.bookTickets .title').removeClass('bg')
    $('.bookTickets .detail').hide()
  })
  $('.detail .derailInfo').click(function(){
    $('.bookTickets .title').removeClass('bg')
    event.stopPropagation();
  })
  $('.goback').click(function(){
    window.history.go(-1)
  })
  $('.tourist').click(function(){
    window.location.href = 'frequentTravelers.html'
  })
  let sessDate = sessionStorage.getItem('sessDate')
  if(sessDate){
    $('.chooseDate').text(sessDate)
  }else{
    $('.chooseDate').text('(今天)'+getNowFormatDate())
  }
})

function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}