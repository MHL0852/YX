import { parse } from 'qs'
import {message} from 'antd'
import moment from 'moment'
import {add,wholeSend,del,edit,check} from './orgListServ'
import {isEmpty, isArray, cloneDeep, merge} from 'lodash'

// 引入路由对象
import { hashHistory } from 'dva/router'

// 初始默认状态
const defultState = {
  showModal:false,
  createPerson:'',
  girard:'',
  dataSource:[],
  remark:'',
  item:'',
  type:'add'//保存调接口时判断是修改还是新增
};

const tmpModule = {
  state: cloneDeep(defultState),
  subscriptions: {
    setup ({dispatch, history}) {
      history.listen(location => {
        if(tmpModule.pathname === '' + location.pathname){
          dispatch({type: 'getRoleList', payload: {}})
        }
      })
    },
  },

  effects: {
    // 查询记录 del
    *getRoleList({ payload }, { put, call, select }) {
      try{
      }catch(e){
        console.error(e)
      }
    },
    *del({ payload }, { put, call, select }) {
      let {dataSource}  = yield select(d => d[tmpModule.namespace]);
      let {orderId} = payload;
      console.log('orderId',orderId);
      try{
          let result = yield call(del, parse({  orderId:orderId  }));
          if(result.resultCode+'' == '0'){
            dataSource.map((item,index)=>{
              if(item.orderId == orderId){
                dataSource.splice(index,1);
              }
            });
            yield put({  type: 'updateStore', payload: {
              dataSource:dataSource,
          }});
            message.success('删除成功！',2)
          }

      }catch(e){
        console.error(e)
      }
    },
    *edit({ payload }, { put, call, select }) {
      let {item} = payload;
      console.log('item',item);
      try{

         let result = yield call(check, parse({
          orderId: item.orderId
        }));
        console.log("result==",result);

        if ('0' === '' + result.resultCode){
        yield put({  type: 'updateStore', payload: {
              createPerson:result.data.createPerson,
              girard: result.data.girard,
              remark: result.data.remark,
              item:item,
              showModal:true,
              type:'edit'
          }})}
      }catch(e){
        console.error(e)
      }
    },
    *confirm({ payload }, { put, call, select }) {
      let { createPerson, girard, remark ,type,dataSource,item}  = yield select(d => d[tmpModule.namespace]);
      console.log('createPerson',createPerson, 'girard',girard, 'remark',remark);
      try{
        let result ;
        if(type + '' === 'edit'){
              result = yield call(edit, parse({
                channelId: 22,
                createPerson:createPerson,
                girard: girard,
                memberId: 22,
                remark: remark,
                sellerId: 22,
                orderId:item.orderId
            }));
        }else{
              result = yield call(add, parse({
                channelId: 22,
                createPerson:createPerson,
                girard: girard,
                memberId: 22,
                remark: remark,
                sellerId: 22
            }));
            if(result.resultCode+'' === '0'){
              let obj = {};
              obj['orderId'] = result.data;
              dataSource.push(obj);
              yield put({  type: 'updateStore', payload: { dataSource : dataSource } })
          }
            // dataSource
        }

       if(result.resultCode+'' === '0'){
            yield put({  type: 'updateStore', payload: { showModal : false } });
            message.success('保存成功！',2)
        }
      }catch(e){
        console.error(e)
      }
    },
  },

  reducers: {
    updateStore(preState, action) {
      return Object.assign({}, preState, action.payload)
    },
  }
};

export default tmpModule
