$(function () {

  let days = getFullChunkDates(getNowFormatDate())
  let afterDays = getFullChunkDates(getAfterDays(getNowFormatDate()))
  console.log(afterDays, "afterDays")
  let completeArray = days.concat(afterDays)
  console.log(completeArray,"completeArray");
  var indexCopy = null
  completeArray.map((item,index)=>{
    console.log(index,'index');
    console.log(item,"item");
    if(item.date.fullDate && item.date.fullDate === item.date.today){
      indexCopy = index
    }
  })

  console.log(indexCopy,'copy');
  $('.thisMonth h3').text(days[0].nowMonth)
  days.map((item,index)=>{
    let dom = `
      <li class="date ${item.date.show} ${item.date.fullDate === item.date.today?'active':''} ${index > indexCopy ? 'optional':''}" date="${item.date.fullDate}">
        <span>${item.date.num}</span>
        <span>${item.date.nong}</span>
      </li>
    `
    $(dom).appendTo($('.thisMonth ul'))
  })
  console.log(days, '11111');

 
  
  // let afterDays = getFullChunkDates()
  // console.log(showCal(),"农历");
  $('.afterMonth h3').text(afterDays[0].afterMonth)
  afterDays.map((item,index)=>{
    let dom = `
      <li class="date ${item.date.show} ${item.date.fullDate === item.date.today?'active':''} ${index + days.length + 1  - indexCopy < 30 ? 'optional':''}" date="${item.date.fullDate}">
        <span>${item.date.num}</span>
        <span>${item.date.nong}</span>
      </li>
    `
    $(dom).appendTo($('.afterMonth ul'))
  })

  $('.optional').click(function(){
    $('.date').removeClass('active')
    $(this).addClass('active')
  })
  let sessDate = ''
  $('.date').click(function(){
    sessDate = $(this).attr('date')
  })
  
  $('.determine').click(function(){
    sessionStorage.setItem('sessDate',sessDate)
    window.history.go(-1)
  })
})

function getDates(d, t = 0) {
  let curDate = new Date(d.replace(/-/g, '/'))
  let curMonth = curDate.getMonth()
  curDate.setMonth(curMonth + t + 1)
  curDate.setDate(0)
  let curDates = new Array(curDate.getDate()).fill(0).map((item, key) => {
    return key + 1
  })
  return curDates
}



function getWeek(d) {
  let curDate = new Date(d.replace(/-/g, '/'))
  curDate.setDate(1)
  return curDate.getDay()
}

function getFullChunkDates(d) {
  let curDates = getDates(d)
  let preDates = getDates(d, -1)
  let nexDates = getDates(d, 1)
  let curWeek = getWeek(d)
  let nowMonth = getNowFormatDate().substr(0,7).replace('-','年') + '月'
  let after = getNowFormatDate().split('-')
  let afterMonth = ''
  if(after[1]*1>=12){
    afterMonth = (after[0]*1 + 1) + '年' + (after[1]*1 + 1) + '月'
  }else{
    afterMonth = (after[0]*1) + '年' + (after[1]*1 + 1) + '月'
  }
  console.log(afterMonth,"after");
  
  curDates = curDates.map((i, k) => {
      let fullDate = /(^\d{4})-(\d{1,2})-/.exec(d)[0] + i
      let year = fullDate.split('-')
      let nong = showCal(year[0],year[1],year[2])
      let dataJson = {
        nowMonth:nowMonth,
        afterMonth:afterMonth,
        date:{
          num: i,
          fullDate: fullDate,
          year:year,
          nong:nong,
          show: "show",
          today:getNowFormatDate()
        }
      }
      return dataJson
  })
  preDates = preDates.map(i => {
    return {
      nowMonth:nowMonth,
      afterMonth:afterMonth,
      date:{
        num: i,
        fullDate: null,
        year:null,
        nong:null,
        show: 'none',
        today:null
      }
    }
  })
  nexDates = nexDates.map(i => {
    return {
      nowMonth:nowMonth,
      afterMonth:afterMonth,
      date:{
        num: i,
        fullDate: null,
        year:null,
        nong:null,
        show: 'none',
        today:null
      }
    }
  })
  let preCurDates = preDates.slice(preDates.length - (curWeek === 0 ? 6 : curWeek - 1), preDates.length).concat(curDates)
  return preCurDates.concat(nexDates.slice(0, 42 - preCurDates.length))
}

function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

function getAfterDays(date) {
  let newDate = date.split('-')
  console.log(newDate, "newDate");
  let newStr = ''
  if (newDate[1] * 1 >= 12) {
    newStr = (newDate[0] * 1 + 1).toString() + '-1-1'
  } else {
    newStr = newDate[0] + '-' + (newDate[1] * 1 + 1).toString() + '-1'
  }
  return newStr
}


/*获取当前农历*/
function showCal(yy,mm,dd) {
  // var D = new Date();
  // var yy = D.getFullYear();
  // var mm = D.getMonth() + 1;
  // var dd = D.getDate();
  // var ww = D.getDay();
  // var ss = parseInt(D.getTime() / 1000);
  // if (yy < 100) yy = "19" + yy;
  return GetLunarDay(yy, mm, dd);
}

//定义全局变量 
var CalendarData = new Array(100);
var madd = new Array(12);
var tgString = "甲乙丙丁戊己庚辛壬癸";
var dzString = "子丑寅卯辰巳午未申酉戌亥";
var numString = "一二三四五六七八九十";
var monString = "正二三四五六七八九十冬腊";
var weekString = "日一二三四五六";
var sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
var cYear, cMonth, cDay, TheDate;
CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
madd[0] = 0;
madd[1] = 31;
madd[2] = 59;
madd[3] = 90;
madd[4] = 120;
madd[5] = 151;
madd[6] = 181;
madd[7] = 212;
madd[8] = 243;
madd[9] = 273;
madd[10] = 304;
madd[11] = 334;

function GetBit(m, n) {
  return (m >> n) & 1;
}
//农历转换 
function e2c() {
  TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
  var total, m, n, k;
  var isEnd = false;
  var tmp = TheDate.getYear();
  if (tmp < 1900) {
    tmp += 1900;
  }
  total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38;

  if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
    total++;
  }
  for (m = 0;; m++) {
    k = (CalendarData[m] < 0xfff) ? 11 : 12;
    for (n = k; n >= 0; n--) {
      if (total <= 29 + GetBit(CalendarData[m], n)) {
        isEnd = true;
        break;
      }
      total = total - 29 - GetBit(CalendarData[m], n);
    }
    if (isEnd) break;
  }
  cYear = 1921 + m;
  cMonth = k - n + 1;
  cDay = total;
  if (k == 12) {
    if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
      cMonth = 1 - cMonth;
    }
    if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
      cMonth--;
    }
  }
}

function GetcDateString() {
  var tmp = "";
  /*显示农历年：（ 如：甲午(马)年 ）*/
  /*tmp+=tgString.charAt((cYear-4)%10); 
  tmp+=dzString.charAt((cYear-4)%12); 
  tmp+="("; 
  tmp+=sx.charAt((cYear-4)%12); 
  tmp+=")年 ";*/
  // if (cMonth < 1) {
    // tmp += "(闰)";
    // tmp += monString.charAt(-cMonth - 1);
  // } else {
    // tmp += monString.charAt(cMonth - 1);
    // tmp += ''
  // }
  // tmp += "月";
  if(cDay===1){
    tmp += monString.charAt(Math.abs(cMonth) - 1) + '月'
    if (cMonth < 1) {
      tmp += "(闰)";
    } else {
      tmp += ''
    }
    console.log(tmp,"tmp");
  }else{
    tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "三十"));
    if (cDay % 10 != 0 || cDay == 10  ) {
      tmp += numString.charAt((cDay - 1) % 10);
    }
  }
  
  return tmp;
}

function GetLunarDay(solarYear, solarMonth, solarDay) {
  //solarYear = solarYear<1900?(1900+solarYear):solarYear; 
  if (solarYear < 1921 || solarYear > 2020) {
    return "";
  } else {
    solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
    e2c(solarYear, solarMonth, solarDay);
    return GetcDateString();
  }
}