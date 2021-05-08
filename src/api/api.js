import { getAction, postAction } from '@/api/manage'

// 一体化平台接口
export const queryAllProjects = () => getAction(process.env.VUE_APP_BASE_API + '/')
export const login = params => postAction('/login', params) // 登录
