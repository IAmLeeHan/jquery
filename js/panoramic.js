$(function () {
  $('.menu li').click(function () {
    console.log('切换顶部tab1', $(this).attr('name'))
    $(this).addClass('active').siblings('li').removeClass('active')
    let index = $(this).attr('name')
    $('.video').removeClass('show')
    // 全部
    if (index == 1) {
        $('.a').addClass('show')
    }
    // 待付款
    if (index == 2) {
        $('.b').addClass('show')
    }
    // 待发货
    if (index == 3) {
        $('.c').addClass('show')
    }
    // 待收货
    if (index == 4) {
        $('.d').addClass('show')
    }
    // 已签收
    if (index == 5) {
        $('.e').addClass('show')
    }
  })
})