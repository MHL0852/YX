import {parse} from 'qs'
import React from 'react'
import {message} from 'antd'
// 日期处理对象
import {isEmpty, cloneDeep} from 'lodash'


const defaultTableData = {};

// 初始默认状态
const defultState = {
  tabColumns: [
    {
    title: '客户单号',
    dataIndex: 'name',
    key: 'name',
    width:120,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width:200,
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width:250,
  },{
    title: '客户单号',
    dataIndex: 'name',
    key: 'name0',
    width:120,
  },{
    title: '客户单号',
    dataIndex: 'name',
    key: 'name9',
    width:120,
  },{
    title: '客户单号',
    dataIndex: 'name',
    key: 'name8',
    width:120,
  },{
    title: '客户单号',
    dataIndex: 'name',
    key: 'name7',
    width:120,
  },{
    title: '客户单号',
    dataIndex: 'name',
    key: 'name6',
    width:120,
  },{
    title: '客户单号',
    dataIndex: 'name',
    key: 'name5',
    width:120,
  },{
    title: '客户单号',
    dataIndex: 'name',
    key: 'name4',
    width:120,
  },{
    title: '客户单号',
    dataIndex: 'name',
    key: 'name3',
    width:120,
  },{
    title: '客户单号',
    dataIndex: 'name',
    key: 'name2',
    width:120,
  },{
    title: '客户单号',
    dataIndex: 'name',
    key: 'name1',
    width:120,
  },],

  tabData: [
    {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
    {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
    {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
    {
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '31',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '32',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '33',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '34',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '35',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '36',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '37',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '38',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '39',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '30',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  pageSize: 10,
};

export default {
  namespace: 'testModel',
  state: defultState,
  //订阅数据
  subscriptions: {
    setup({dispatch, history}) {

    },
  },
  //数据逻辑部分
  effects: {},
  //更新数据到state
  reducers: {}
}

