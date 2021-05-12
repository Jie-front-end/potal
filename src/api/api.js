import { getAction, postAction } from '@/api/manage'

// 一体化平台接口
export const queryOrderList = () => getAction('/potal/orderSystem/order/list1')
// export const login = params => postAction('/mps', params) // 登录
export const login = params => postAction('/login', params) // 获取项目列表
