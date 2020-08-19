function nameFn () {
    console.log($('.name').val())
    let text = $('.name').val()
    if (text !== '') {
        $('.nameClear').removeClass('none')
    } else {
        $('.nameClear').addClass('none')
    }
}
function phoneFn () {
    console.log($('.phone').val())
    let text = $('.phone').val()
    if (text !== '') {
        $('.phoneClear').removeClass('none')
    } else {
        $('.phoneClear').addClass('none')
    }
}
$('.nameClear').click(function () {
    $('.name').val('')
    $(this).addClass('none')
})
$('.phoneClear').click(function () {
    $('.phone').val('')
    $(this).addClass('none')
})


$('.settingBtn').click(function () {
    console.log($(this).hasClass('settingBtnActive'))
    let flag = $(this).hasClass('settingBtnActive')
    if (flag) {
        $(this).removeClass('settingBtnActive')
    } else {
        $(this).addClass('settingBtnActive')
    }
})