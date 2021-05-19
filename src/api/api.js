import { getAction, postAction } from '@/api/manage'

// 一体化平台接口
export const getSysNotice = (params) => getAction('/portal/sysNotice/page', params)
export const login = params => postAction('/auth/login', params) // 登录
export const getAuthorize = params => getAction('/portal/auth/access_token', params) //
