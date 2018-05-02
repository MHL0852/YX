import React from 'react'
import {connect} from 'dva'
import {Form, Modal, Button, Icon, Row, Col, Switch,Tree} from 'antd'
import {CollapsiblePanels} from '../../components/CollapsiblePanels/index.jsx'
import {mapStateToProps} from '../../utils/view_utils'
import styles from './orgListStyle.less'
import mockData  from './roleMockData'
const FormItem = Form.Item;
const TreeNode = Tree.TreeNode;

const routeView = function ({dispatch, model, form}) {

  const {resetFields, getFieldDecorator, validateFields, setFieldsValue} = form;
  const {modelObj, namespace} = model;
  const formItemLayout = {
    labelCol: {span: 9},
    wrapperCol: {span: 15}
  };
  console.log("modelObj", modelObj);
  const {detailData,support,state,status} = modelObj;

  //是否支持整版发货
  function onSupport(value) {
    dispatch({
      type: `${namespace}/onSupport`,
      payload: {value}
    })
  }
  return <div>
    <div className={'customForm'}>
      <CollapsiblePanels title='基本信息'>
        <Form autoComplete="off" className="auto-wrap">

          <Row>
            <Col span={8}>
              <FormItem {...formItemLayout} label="款号">
                <div>{detailData.girard}</div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem {...formItemLayout} label="创建人">
                <div>{detailData.createPerson}</div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem {...formItemLayout} label="买家备注">
                <div>{detailData.remark}</div>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </CollapsiblePanels>

    </div>




  </div>
}

export default connect(mapStateToProps)(Form.create()(routeView))
