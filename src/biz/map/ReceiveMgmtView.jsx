import React from 'react';
// dva 连接组件 - 连接route和model
import {connect} from 'dva';
// 选项卡、表格、弹出确认框
import { Tabs, Form, Table, Pagination, Modal, message, Input,Steps, Select, Row, Col, Checkbox,Tree, Button,Badge,Tag, DatePicker,Timeline,Upload,Dropdown,Menu,Icon,Radio,InputNumber,Switch } from 'antd';
// 获取样式类名
import cx from 'classnames'
// 当前页面样式
import style from  './RecevingMgmtMod.less'
import moment from 'moment';

const ButtonGroup = Button.Group;

// 表单域
const FormItem = Form.Item;
// 判断对象是否为空
import { Link,hashHistory } from 'dva/router'
import { listConfig } from '../../config/config'
const TabPane = Tabs.TabPane;
const {Option,OptGroup} = Select;
const SubMenu = Menu.SubMenu;
// 表单项布局
const formItemLayout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16}
};


const testView = function ({dispatch, ReceiveMgmt, form}) {
  const {resetFields,getFieldDecorator,validateFields,setFieldsValue} = form;
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }

  const menu2 = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <SubMenu title="sub menu">
        <Menu.Item>3d menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
      <SubMenu title="disabled sub menu" disabled>
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  );
  const {tabColumns,tabData,pageSize} = ReceiveMgmt;
  tabColumns.push({
    title: 'Action',
    key: 'action',
    width:200,
    render: (text, record) => (
      <span>
      <a>Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a>Delete</a>
      <span className="ant-divider" />
      <a className="ant-dropdown-link">
        More actions <Icon type="down"/>
      </a>
    </span>)
  });
  let tableWidth=(function () {
    let val=0;
    tabColumns.forEach(item=>{
      val+=parseFloat(item.width)
    });
  return val+65;
  })();

  let queryList = {};

  // 路由视图
  return (
   <div className={style.ReceiveMgmtContainer}>
     <div className="ReceiveSearch">
       <div className={style.searchCell}>
         <span>收货单号：</span>
         <Input placeholder="请输入收货单号" />
       </div>
       <div className={style.searchCell}>
         <span>单据内容：</span>
         <Input placeholder="请输入收货单号" />
       </div>
       <div className={style.searchCell}>
         <span>收货库位：</span>
         <Input placeholder="请输入收货单号" />
       </div>
       <div className={style.searchCell}>
         <span>状态：</span>
         <Input placeholder="请输入收货单号" />
       </div>
       <div className={style.searchCell}>
       <Button type="primary">查询</Button>
       <Button>重置</Button>
       </div>
     </div>
     <div className={style.operationGroup}>
       <ButtonGroup>
         <Button type="primary">新建</Button>
         <Button>修改</Button>
         <Button>生效</Button>
         <Button>失效</Button>
         <Button>快捷收货</Button>
         <Button>整单收货</Button>
         <Button>收货登记</Button>
         <Button>整单质检</Button>
         <Button>质检登记</Button>
         <Button>创建上架单</Button>
         <Button>取消</Button>
         <Button>关闭</Button>
         <Button>重新打开</Button>
       </ButtonGroup>
     </div>
     <div className={style.tableContainer}>
       <Table columns={tabColumns} dataSource={tabData} rowSelection={queryList} scroll={{ x: tableWidth, y: 300 }} pagination={false}  bordered/>
       <Pagination total={tabData.length} showSizeChanger={true} pageSizeOptions={[10,20,30,40]}/>
     </div>
   </div>
  );
};

// 连接视图(view)和模型(model)
export default connect((data) => ({...data}))(Form.create()(testView));
