$(function(){
  $.get('shareToPanel.html',function(data){
    $('.shareTo').html(data)
    
    $('.share').click(function(){
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
    $('.goback').click(function(){
      window.history.go(-1)
    })
  })
})