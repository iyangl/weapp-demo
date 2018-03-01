// 时间格式：2018-02-28 23:59
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
}

// 时间格式: 23:59
const formatHour = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()

  return [hour, minute].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 将时间戳转换为日期
const time2Date = time => {
  var timeDate = new Date(time);
  if (isToday(timeDate)) {
    return '今天 ' + formatHour(timeDate);
  } else {
    return formatTime(timeDate);
  }

}

// 判断传入日期是否为今天
function isToday(date) {
  var today = new Date(),
    //获取从今天0点开始到现在的时间
    todayTime = today.getTime() % (1000 * 60 * 60 * 24),
    //获取要判断的日期和现在时间的偏差
    offset = date.getTime() - today.getTime(),
    //获取要判断日期距离今天0点有多久
    dateTime = offset + todayTime;

  if (dateTime < 0 || dateTime > 1000 * 60 * 60 * 24) {
    return false;
  } else {
    return true;
  }
}

// 获取时间戳
const timestamp = () => {
  return new Date().getTime()
}

// 判断对象是否为空
function isEmptyObject(obj) {
  for (var key in obj) {
    return false
  }
  return true
}

module.exports = {
  formatTime: formatTime,
  timestamp: timestamp,
  isEmptyObject: isEmptyObject,
  time2Date: time2Date
}
