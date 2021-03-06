import React from 'react'
import { connect } from 'dva'
import { Form,Modal ,Popconfirm,Row,Col,Button,Input} from 'antd'
import ListPage from '../../components/PageTmpl/ListPage'
import { mapStateToProps } from '../../utils/view_utils'
import styles from './orgListStyle.less'
import config from '../../config/config'
import mockData  from './roleMockData'
import {Grid, QueryCondition} from '../../components/Grid/Grid'
import {Link, hashHistory} from 'dva/router'
import cx from 'classnames'
const FormItem = Form.Item;
const routeView = function({dispatch, model, form}) {
  const {resetFields, getFieldDecorator, validateFields, setFieldsValue} = form
  const { modelObj, namespace } = model 
  let { showModal ,girard , remark , createPerson ,dataSource} = modelObj
  const formItemLayout = {
    labelCol: {span: 6},
    wrapperCol: {span: 18}
  };
  // console.log('modelObj',modelObj)
  //弹窗取消
  const cancel = (type)=>{
    form.resetFields();
    dispatch({type: `${namespace}/updateStore`,payload: {showModal:false} }) 
  }
  //新增提交
  const handleOk = (type)=>{
    form.resetFields();
    dispatch({type: `${namespace}/confirm`,payload: { showModal:false} }) 
  }
  function inputChange(name, value) {
    let obj= {};  obj[name] = value;
    dispatch({
      type: `${namespace}/updateStore`,
      payload:obj
    });
  }
  const columns = [
    {title: 'ID', width: 150, dataIndex: 'orderId', key: 'orderId'},
  ];


  
  //修改、删除、禁用等操作
  function generateAction() {
    return {
      title: '操作',
      key: 'operation', 
      width: 150,
      render: (item, record, index) => {
        return <div >
        <a onClick={e => {hashHistory.push("/home/orgMgmt/orgDetail?orderId="+record.orderId)}}>查看</a>
        <span className='ant-divider'/>
        <a  onClick={e =>{dispatch({ type: `${namespace}/edit`, payload:{item:record}})}}>修改</a>
          <span className='ant-divider'/>
          <Popconfirm Collapse title='确认删除？' okText='确定' cancelText='取消'  onConfirm={() => {dispatch({ type: `${namespace}/del`, payload:{orderId:record.orderId}})}}> 
        <a>删除</a>
        </Popconfirm> 
    </div>
      }
    };
  }
  //表格配置(表头,和数据源)
  const data = {
    columns: columns.concat(generateAction()),
    tableData:{total:dataSource.length, dataSource:dataSource},
    pageConfig:{current:1,pageSize:10}
  };
  return <div className="public_listMain">
        <div className={'functionButton'}>
        <Button className={cx('mg2r')} type="primary" 
            onClick={e => dispatch({type: `${namespace}/updateStore`,payload: {
             type:'add', showModal:true, girard:'', remark:'', createPerson:'' ,item:'' }})} >新增</Button>		  
        </div>
       <Modal title="新增" visible={showModal} width={900} onCancel={()=>cancel()}
       footer={
         <Row className="txtcenter mg1">  
            <Button type="primary" onClick={()=>cancel()} className={cx('mg2r')}>取消</Button>
            <Button type="primary" onClick={()=>handleOk()} className={cx('mg2r')}>确认</Button>
          </Row>}> 
          <Row>
            <Col span={8}>
              <FormItem  {...formItemLayout} label="创建人">
              <Input value={createPerson} onChange={(e) => {
                      inputChange('createPerson', e.target.value);
                    }}/>
              </FormItem>
            </Col>
            <Col span={8}>
            <FormItem  {...formItemLayout} label="买家备注">
            <Input value={remark} onChange={(e) => {
                      inputChange('remark', e.target.value);
                    }}/>
            </FormItem>
            </Col>  
            <Col span={8}>
              <FormItem  {...formItemLayout} label="款号">
              <Input  value={girard} onChange={(e) => {
                      inputChange('girard', e.target.value);
                    }}/>
              </FormItem>
            </Col>
          </Row>  
    </Modal>
    <div>
    <div className={cx('mg3t')}>
        <Grid nameSpace='tableDemo' data={data} />
      </div>
    </div> 
  </div>
}

// 连接视图(view)和模型(model)
export default connect(mapStateToProps)(Form.create()(routeView))
