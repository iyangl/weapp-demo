const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
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
}
