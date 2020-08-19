$('.delete').click(function () {
    console.log('删除历史')
    $('.history').addClass('none')
})

function change () {
    console.log('blur')
    console.log($('.searchIpt').val())
    $('.hot').removeClass('none')
    $('.history').removeClass('none')
    if ($('.searchIpt').val() === '') {
        $('.search-list').addClass('none')
    }
}

$('.content li').click(function () {
    let text = $(this).text()
    $('.searchIpt').val(text)
    $('.history').addClass('none')
    $('.hot').addClass('none')
    $('.search-list').removeClass('none')
})