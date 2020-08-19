$(function () {
  let products = [{
      id: 1,
      name: '面包诱惑',
      jiage: 27,
      chakan: 100,
      img: '../../images/localSpecialties/sjtj_03.png',
    },
    {
      id: 2,
      name: '吉祥馄炖',
      jiage: 19,
      chakan: 102,
      img: '../../images/localSpecialties/sjtj_05.png',
    },
    {
      id: 3,
      name: '七里海大闸蟹',
      jiage: 279,
      chakan: 10,
      img: '../../images/localSpecialties/sjtj_09.png',
    },
    {
      id: 4,
      name: '草莓水果捞',
      jiage: 9.5,
      chakan: 200,
      img: '../../images/localSpecialties/sjtj_10.png',
    },
  ]

  setDom(products)

  $('.select .zonghe').click(function () {
    let flag = $(this).attr('class')
    console.log(flag, "flag");
    if (flag.indexOf('up') === -1 && flag.indexOf('down') === -1) {
      $(this).addClass('up')
      products = products.sort((a, b) => {
        return a.id - b.id
      })
      console.log(products, "products");
      setDom(products)
    } else if (flag.indexOf('up') !== -1) {
      $(this).removeClass('up')
      $(this).addClass('down')
      products = products.sort((a, b) => {
        return b.id - a.id
      })
      console.log(products, "products");
      setDom(products)
    } else {
      $(this).removeClass('down')
      $(this).addClass('up')
      products = products.sort((a, b) => {
        return a.id - b.id
      })
      console.log(products, "products");
      setDom(products)
    }
  })


  /* 销量排序 */

  $('.select .xiaoliang').click(function () {
    let flag = $(this).attr('class')
    console.log(flag, "flag");
    if (flag.indexOf('up') === -1 && flag.indexOf('down') === -1) {
      $(this).addClass('up')
      products = products.sort((a, b) => {
        return a.chakan - b.chakan
      })
      console.log(products, "products");
      setDom(products)
    } else if (flag.indexOf('up') !== -1) {
      $(this).removeClass('up')
      $(this).addClass('down')
      products = products.sort((a, b) => {
        return b.chakan - a.chakan
      })
      console.log(products, "products");
      setDom(products)
    } else {
      $(this).removeClass('down')
      $(this).addClass('up')
      products = products.sort((a, b) => {
        return a.chakan - b.chakan
      })
      console.log(products, "products");
      setDom(products)
    }
  })

  /* 价格排序 */
  $('.select .jiage').click(function () {
    let flag = $(this).attr('class')
    console.log(flag, "flag");
    if (flag.indexOf('up') === -1 && flag.indexOf('down') === -1) {
      $(this).addClass('up')
      products = products.sort((a, b) => {
        return a.jiage - b.jiage
      })
      console.log(products, "products");
      setDom(products)
    } else if (flag.indexOf('up') !== -1) {
      $(this).removeClass('up')
      $(this).addClass('down')
      products = products.sort((a, b) => {
        return b.jiage - a.jiage
      })
      console.log(products, "products");
      setDom(products)
    } else {
      $(this).removeClass('down')
      $(this).addClass('up')
      products = products.sort((a, b) => {
        return a.jiage - b.jiage
      })
      console.log(products, "products");
      setDom(products)
    }
  })

  $('.shaixuan').click(function () {
    event.stopPropagation()
    $('.filterBox').show()
  })

  $(document).click(function () {
    event.stopPropagation()
    $('.filterBox').hide()
  })

  $('.filterPanel').click(function () {
    event.stopPropagation()
  })

  $('.filterPanel .close').click(function () {
    $('.filterBox').hide()
  })

  $('.categoriesItem1 li').click(function () {
    $('.categoriesItem1 li').removeClass('active')
    $(this).addClass('active')
  })
  $('.categoriesItem2 li').click(function () {
    $('.categoriesItem2 li').removeClass('active')
    $(this).addClass('active')
  })
  $('.categoriesItem3 li').click(function () {
    $('.categoriesItem3 li').removeClass('active')
    $(this).addClass('active')
  })
  $('.categoriesItem4 li').click(function () {
    $('.categoriesItem4 li').removeClass('active')
    $(this).addClass('active')
  })
  $('.reset').click(function () {
    $('.categories li').removeClass('active')
    $('.categories li').each(function () {
      if ($(this).text() === '全部') {
        $(this).addClass('active')
      }
    })
  })
  $('.submit').click(function () {
    $('.filterBox').hide()
  })

  $('.leftBtn').click(function () {
    window.history.go(-1)
  })
  $('.productItem').click(function () {
    window.location.href = 'productDetails.html'
  })

})

function setDom(products) {
  $('.productList').empty()
  products.map(item => {
    let dom = `
    <div class="productItem">
        <img src="${item.img}" alt="">
        <p>${item.name}</p>
        <div class="Detail">
          <h6>￥${item.jiage}</h6>
          <div class="view">
            <span>${item.chakan}</span>
            <img src="../../images/localSpecialties/eye.png" alt="">
          </div>
        </div>
      </div>
    `
    // console.log(dom,"dom");

    $(dom).appendTo('.productList')
  })
}