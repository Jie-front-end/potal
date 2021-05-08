import request from '@/utils/request'

// get
export function getAction (url, parameter) {
  return request({
    url: url,
    method: 'get',
    params: parameter
  })
}

// post
export function postAction (url, parameter) {
  return request({
    url: url,
    method: 'post',
    data: parameter
  })
}
