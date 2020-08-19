$('.mycollect-tab li').click(function () {
    console.log('切换顶部tab1', $(this).attr('name'))
    $(this).addClass('active').siblings('li').removeClass('active');
    let index = $(this).attr('name')
    // 全部
    if (index == 1) {
        $('.collect-list').addClass('none')
        $('.a').removeClass('none')
    }
    // 待付款
    if (index == 2) {
        $('.collect-list').addClass('none')
        $('.b').removeClass('none')
    }
    // 待发货
    if (index == 3) {
        $('.collect-list').addClass('none')
        $('.c').removeClass('none')
    }
    // 待收货
    if (index == 4) {
        $('.collect-list').addClass('none')
        $('.d').removeClass('none')
    }
    // 已签收
    if (index == 5) {
        $('.collect-list').addClass('none')
        $('.e').removeClass('none')
    }
})