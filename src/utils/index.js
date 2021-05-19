import { getAuthorize } from '@/api/api'
import { setToken } from '@/utils/auth'
import { Notification } from 'element-ui'
export function formatter (number) {
  const numbers = number.toString().split('').reverse()
  const segs = []

  while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

  return segs.join(',').split('').reverse().join('')
}

/**
 * 10000 => '10,000"
 * @param {number} num
 */
export function toThousandFilter (num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

// ['2020-01', '2020-02']
export function getBeforeMonth (num) {
  const dataArr = []
  const data = new Date()
  data.setMonth(data.getMonth(), 1)
  for (let i = 0; i < num; i++) {
    data.setMonth(data.getMonth() - 1)
    let m = data.getMonth() + 1
    m = m < 10 ? '0' + m : m
    dataArr.push(data.getFullYear() + '-' + (m))
  }
  dataArr.reverse()
  return dataArr
}

// ['1月', '2月']
export function getBeforeMonthStr (num, space) {
  const dataArr = []
  const data = new Date()
  data.setMonth(data.getMonth(), 1)
  for (let i = 0; i < num; i++) {
    data.setMonth(data.getMonth() - 1)
    const m = data.getMonth() + 1
    const str = space ? m + ' 月' : m + '月'
    dataArr.push(str)
  }
  dataArr.reverse()
  return dataArr
}

// 1月到12月
export function getCurrentMonthArr (num, space) {
  const dataArr = []
  for (let m = 0; m < num; m++) {
    const str = space ? (m + 1) + ' 月' : (m + 1) + '月'
    dataArr.push(str)
  }
  return dataArr
}

export function getUrlParam (paraName) {
  var url = document.location.toString()
  var arrObj = url.split('?')

  if (arrObj.length > 1) {
    var arrPara = arrObj[1].split('&')
    var arr

    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=')

      if (arr != null && arr[0] == paraName) {
        return arr[1]
      }
    }
    return ''
  } else {
    return ''
  }
}

export function getTokenAPI (cb) {
  const code = getUrlParam('code')
  const params = {
    code: code
  }
  console.log('cb', 'code', code, cb)
  getAuthorize(params).then(res => {
    if (res.code === 0) {
      setToken(res.data.result.access_token)
      if (cb) cb()
    } else {
      Notification.error({
        title: '消息提示',
        message: res.message || '获取token失败',
        position: 'bottom-left'
      })
    }
  }).catch(() => {
    Notification.error({
      title: '消息提示',
      message: '获取token失败',
      position: 'bottom-left'
    })
  })
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  if (!time) return ''
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}
