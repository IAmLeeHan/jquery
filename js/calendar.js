let newDate = new Date();
let year = newDate.getFullYear();
let month = newDate.getMonth() + 1;
let data = newDate.getDate();
// 初始化天数
dectDataShow(year, month)
initDate(year, month, data)


$('.leftBox').click(function () {
    let year = Number($('.year').text())
    let month = Number($('.month').text()) - 1
    if (month < 1) {
        month = 12
        year = year - 1
    }
    dectDataShow(year, month)
    initDate(year, month, data)
})

$('.rightBox').click(function () {
    let year = Number($('.year').text())
    let month = Number($('.month').text()) + 1
    if (month > 12) {
        month = 1
        year = year + 1
    }
    dectDataShow(year, month)
    initDate(year, month, data)
})





function initDate(year, month, data) {
    let newyear = newDate.getFullYear();
    let newmonth = newDate.getMonth() + 1;
    //
    let html = ''
    let num = new Date(year, month + 1, 0).getDate()
    console.log(num)
    for (let i = 0; i < num; i++) {
        let d = i + 1
        if (Number(year) <= newyear && Number(month) < newmonth || Number(year) < newyear && Number(month) >= newmonth) {
            html = html + '<div class="child old"><div class="boxs"><p>' + d + '</p><div class="op0">·</div></div></div>'
        } else if (Number(year) === newyear && Number(month) === newmonth) {
            if (d < data) {
                html = html + '<div class="child old"><div class="boxs"><p>' + d + '</p><div class="op0">·</div></div></div>'
            } else if (d === data) {
                html = html + '<div class="child today"><div class="boxs todayBox"><p>' + '今天' + '</p><div class="dian">·</div></div></div>'
            } else {
                html = html + '<div class="child"><div class="boxs"><p>' + d + '</p><div class="">·</div></div></div>'
            }
        } else{
            html = html + '<div class="child"><div class="boxs"><p>' + d + '</p><div class="">·</div></div></div>'
        }
    }
    console.log(html)
    $('.content').html(html)
}

function dectDataShow(year, month) {
    let minMonth = month - 1
    if (minMonth < 1) {
        minMonth = 12
    }
    let maxMonth = month + 1
    if (maxMonth > 12) {
        maxMonth = 1
    }
    // 日期填充
    $('.year').text(year)
    $('.month').text(month)
    $('.minMonth').text(minMonth)
    $('.maxMonth').text(maxMonth)
}