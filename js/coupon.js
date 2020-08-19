$('.coupon-tab li').click(function () {
    console.log('切换顶部tab1', $(this).attr('name'))
    $(this).addClass('active').siblings('li').removeClass('active');
})