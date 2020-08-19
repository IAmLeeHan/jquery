//
$('.tabbar li').click(function () {
    $(this).addClass('active').siblings('li').removeClass('active')
})

// 精彩周边 swiper
var mySwiper = new Swiper('.swiper-container3', {
    autoplay: false, //可选选项，自动滑动
    slidesOffsetBefore : 20,
    spaceBetween : 10,
    slidesPerView :2
    // freeMode : true,
    // freeModeMomentumRatio : 0.5,
    // freeModeMomentumVelocityRatio : 0.5
})

// 精彩周边 swiper
var mySwiper1 = new Swiper('.swiper-container2', {
    autoplay: false, //可选选项，自动滑动
    slidesOffsetBefore : 20,
    spaceBetween : 10,
    freeMode : true,
    freeModeMomentumRatio : 0.5,
    freeModeMomentumVelocityRatio : 0.5
})