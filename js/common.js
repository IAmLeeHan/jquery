$(function() {
	$.get('module/header.html',function(data){
		$(".header").html(data);
	})

	$.get('module/footer.html',function(data){
		$(".footer").html(data);
	})

	$.get('module/sidebar.html',function(data){
		$(".sidebar").html(data);
	})
	$('#pageTitle .goback').click(function () {
        window.history.back(-1);
    })
    $('#pageTitle .rightBox').click(function () {
        window.history.back(-1);
    })
});