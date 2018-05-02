import config from '../../config/config'

import {request} from '../../config/request'

//新增
export async function add(params) {
  return request({
    url: 'http://localhost/v1/trade/submit',
    method: 'post',
    data: params,
    headers:{
      'Content-type': 'application/json;charset=UTF-8'
    },
  })
}
//删除
export async function del(params) {
  return request({
    url: 'http://localhost/v1/trade/delete',
    method: 'POST',
    data: params,
    headers:{
      'Content-type': 'application/json;charset=UTF-8'
    },
  })
}
export async function check(params) {
  return request({ 
    url: 'http://localhost/v1/trade/query',
    method: 'POST',
    data: params,
    headers:{
      'Content-type': 'application/json;charset=UTF-8'
    },
  })
}
export async function edit(params) {
  return request({
    url: 'http://localhost/v1/trade/update',
    method: 'POST',
    data: params,
    headers:{
      'Content-type': 'application/json;charset=UTF-8'
    },
  })
}
