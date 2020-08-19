$('.myorder-tab li').click(function () {
    console.log('切换顶部tab1', $(this).attr('name'))
    $(this).addClass('active').siblings('li').removeClass('active');
    let index = $(this).attr('name')
    // 全部
    if (index == 1) {
        $('.content').addClass('none')
        $('.all').removeClass('none')
    }
    // 待付款
    if (index == 2) {
        $('.content').addClass('none')
        $('.onpay').removeClass('none')
    }
    // 待发货
    if (index == 3) {
        $('.content').addClass('none')
        $('.onwl').removeClass('none')
    }
    // 待收货
    if (index == 4) {
        $('.content').addClass('none')
        $('.onsh').removeClass('none')
    }
    // 已签收
    if (index == 5) {
        $('.content').addClass('none')
        $('.onqs').removeClass('none')
    }
})