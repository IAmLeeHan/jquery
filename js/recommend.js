$('.tab-list li').click(function () {
    console.log('切换顶部tab1', $(this).attr('name'))
    $(this).addClass('tab-list-active').siblings('li').removeClass('tab-list-active');
    let index = $(this).attr('name')
    $('.find-tab li').removeClass('active')
    $('.find-tab li').eq(0).addClass('active')
    $('.recommend').addClass('none')
    $('.a').removeClass('none')
    if (index == 1) {
        $('.cTab').addClass('none')
        $('.A').removeClass('none')
    }
    if (index == 2) {
        $('.cTab').addClass('none')
        $('.B').removeClass('none')
    }
    if (index == 3) {
        $('.cTab').addClass('none')
        $('.C').removeClass('none')
    }
    if (index == 4) {
        $('.cTab').addClass('none')
        $('.D').removeClass('none')
    }
})


$('.find-tab li').click(function () {
    console.log('切换顶部tab1', $(this).attr('name'))
    $(this).addClass('active').siblings('li').removeClass('active');
    let index = $(this).attr('name')
    if (index == 1) {
        $('.recommend').addClass('none')
        $('.a').removeClass('none')
    }
    if (index == 2) {
        $('.recommend').addClass('none')
        $('.b').removeClass('none')
    }
    if (index == 3) {
        $('.recommend').addClass('none')
        $('.c').removeClass('none')
    }
})

$('.cTab li').click(function () {
    let a = document.createElement('a')
    a.href = './html/characteristicVillage/characteristicVillage.html'
    a.click()
})