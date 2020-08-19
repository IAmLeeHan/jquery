$(function () {
  $('.clickOnTheMap li').click(function () {
    $('.clickOnTheMap li').removeClass('active')
    $(this).addClass('active')
  })
  $('.clickOnTheMap .pullBox').swipe({
    swipeUp: function (event, direction, distance, duration, fingerCount, fingerData) {
      console.log('111', direction);
      $('.clickOnTheMap .shadow').addClass('shactive')
      $('.clickOnTheMap .hideArea').slideDown()
    },
    swipeDown: function (event, direction, distance, duration, fingerCount, fingerData) {
      console.log('111', direction);
      $('.clickOnTheMap .shadow').removeClass('shactive')
      $('.clickOnTheMap .hideArea').slideUp()
    }
  })

  $('.hideArea .speakBtn').click(function(){
    $('.clickOnTheMap .shadow').hide()
    $('.clickOnTheMap .speakStart').css('display','flex')
  })

  $('.position .close').click(function(){
    $('.position').hide()
  })

  $('.explainPlay .close').click(function(){
    $('.clickOnTheMap .shadow').show()
    $('.clickOnTheMap .speakStart').hide()
  })

  var action=true;
		$('.contral').click(function(){
			if(action){
				$.playBar.Stop();
				action=false;
				$(this).removeClass('zanting');
				$(this).addClass('play');
				}else{
					$.playBar.Begin();
					action=true;
          // $(this).html("停止");
          $(this).addClass('zanting');
				  $(this).removeClass('play');
        }
			});
		$.playBar.addBar($('.playLine'),1000*60);//第一个参数是需要显示播放器的容器，第二个参数为时间，单位毫秒
		$.playBar.changeBarColor("#72dfff");//设置进度条颜色
})
