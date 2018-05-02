import { parse } from 'qs'
import {message} from 'antd'
import moment from 'moment'
import {isEmpty, isArray, cloneDeep, merge} from 'lodash'
import { hashHistory } from 'dva/router'
import {querydetail,check} from './orgListServ'
// 初始默认状态
const defultState = {
  detailData:{
    "channelId": 33,
    "createPerson": "33332",
    "girard": "333332",
    "memberId": 33,
    "orderId": 1171062282757680128,
    "remark": "3333222",
    "sellerId": 33 
  }, 
}

const tmpModule = {
  state: cloneDeep(defultState),
  subscriptions: {
    setup ({dispatch, history}) {
      history.listen(location => {
        if(tmpModule.pathname === '' + location.pathname){
          dispatch({type: 'getDetail', payload: {orderId:location.query.orderId}})
        }
      })
    },
  },

  effects: {
    // 查询记录
    *getDetail({ payload }, { put, call, select }) {
      try{
        let result = yield call(check, parse({
          orderId: payload.orderId
        }));
        console.log("result==",result)
         
        if ('0' === '' + result.resultCode){
          yield put({type: 'updateStore', payload: {
            detailData:result.data,
          }})
        }
         

      }catch(e){
        console.error(e)
      }
    }
  },
  reducers: {
    updateStore(preState, action) {
      return Object.assign({}, preState, action.payload)
    },
  }
}

export default tmpModule
