import { setToken, getToken } from '@/utils/auth'
import { getAuthorize } from '@/api/api'
/**
 * 单点登录
 */
const init = (callback) => {
  console.log('-------单点登录开始-------')
  const token = getToken()
  const st = getUrlParam('code')
  console.log('code', st)
  console.log('token', token)
  loginSuccess(callback)
  // if (token) {
  //   loginSuccess(callback)
  // } else {
  //   if (st) {
  //     validateSt(st, callback)
  //   } else {
  //     //   oauth2 认证
  //     window.location.href = process.env.VUE_APP_SSO_URL + '/oauth/authorize?client_id=' + process.env.VUE_APP_CLIENT_ID + '&response_type=code&redirect_uri=' + process.env.VUE_APP_CALLBACK_URL
  //   }
  // }
  console.log('-------单点登录结束-------')
}
const SSO = {
  init: init
}

function getUrlParam (paraName) {
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

function validateSt (code, callback) {
  // store.dispatch('FetchToken', { code: code, redirectUri: process.env.VUE_APP_CALLBACK_URL }).then(res => {
  // this.departConfirm(res)
  const params = {
    code: code,
    client_id: 'Portal',
    redirect_uri: 'http://10.0.150.77:8084/portal/auth/login'
  }
  getAuthorize(params).then(res => {
    console.log('res', res)
    if (res.data.code === 0) {
      setToken(res.data.data.result.access_token)
      loginSuccess(callback)
    } else {
      // oauth2 认证
      window.location.href = 'http://10.0.150.77:8081/oauth/authorize?client_id=Portal&redirect_uri=http://10.0.150.77:8084/portal/auth/login&response_type=code'

      // window.location.href = process.env.VUE_APP_SSO_URL + '/oauth/authorize?client_id=' + process.env.VUE_APP_CLIENT_ID + '&response_type=code&redirect_uri=' + process.env.VUE_APP_CALLBACK_URL
    }
  }).catch((err) => {
    console.log(err)
  })
}

function loginSuccess (callback) {
  callback()
}
export default SSO
