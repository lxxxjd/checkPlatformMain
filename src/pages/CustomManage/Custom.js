import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva/index';
import router from 'umi/router';
import { formatMessage } from 'umi-plugin-react/locale/index';

import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Select,
  Table, message, Modal, DatePicker,
} from 'antd/lib/index';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import moment from 'moment/moment';
import styles from '../table.less';

const FormItem = Form.Item;
const { Option } = Select;




// 修改的Form
const CreateForm = Form.create()(props => {
  const { modalVisible, form, handleEdit, handleModalVisible,modalInfo,customType,onSelectCustomType,belongCustomsOptions} = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleEdit(fieldsValue,modalInfo);
    });
  };

  return (
    <Modal
      destroyOnClose
      title="海关修改"
      style={{ top: 100 }}
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="海关名称">
        {form.getFieldDecorator('customsName', {
          initialValue:modalInfo.customsName,
          rules: [
            {
              required: true,
              message: "请输入海关名称",
            },
          ],
        })(<Input placeholder="请输入海关名称" />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="海关类型">
        {form.getFieldDecorator('customsType', {
          initialValue:modalInfo.customsType,
          rules: [
            {
              required: true,
              message: "请选择海关类型",
            },
          ],
        })(
          <Select placeholder="请选择海关类型" style={{width:'100%'}} onChange={onSelectCustomType}>
            <Option value="隶属关">隶属关</Option>
            <Option value="直属关">直属关</Option>
            <Option value="总署关">总署关</Option>
          </Select>
        )}
      </FormItem>
      {customType==="隶属关"?[
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="海关隶属">
          {form.getFieldDecorator('belongto', {
            initialValue:modalInfo.customsType==="隶属关"?modalInfo.belongto:null,
            rules: [
              {
                required: true,
                message: "请选择海关隶属",
              },
            ],
          })(
            <Select placeholder="请选择海关隶属" style={{width:'100%'}}>
              {belongCustomsOptions}
            </Select>
          )}
        </FormItem>]:[]}


    </Modal>
  );
});


const AddForm = Form.create()(props => {
  const { addModalVisible, form, handleAdd, addHandleModalVisible,customType,onSelectCustomType,belongCustomsOptions} = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };

  return (
    <Modal
      destroyOnClose
      title="海关新增"
      style={{ top: 100 }}
      visible={addModalVisible}
      onOk={okHandle}
      onCancel={() => addHandleModalVisible()}
    >

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="海关名称">
        {form.getFieldDecorator('customsName', {
          rules: [
            {
              required: true,
              message: "请输入海关名称",
            },
          ],
        })(<Input placeholder="请输入海关名称" />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="海关类型">
        {form.getFieldDecorator('customsType', {
          rules: [
            {
              required: true,
              message: "请选择海关类型",
            },
          ],
        })(
          <Select placeholder="请选择海关类型" style={{width:'100%'}} onChange={onSelectCustomType}>
            <Option value="隶属关">隶属关</Option>
            <Option value="直属关">直属关</Option>
            <Option value="总署关">总署关</Option>
          </Select>
        )}
      </FormItem>
      {customType==="隶属关"?[
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="海关隶属">
          {form.getFieldDecorator('belongto', {
            rules: [
              {
                required: true,
                message: "请选择海关隶属",
              },
            ],
          })(
            <Select placeholder="请选择海关隶属" style={{width:'100%'}}>
              {belongCustomsOptions}
            </Select>
          )}
        </FormItem>]:[]}

    </Modal>
  );
});


@connect(({ custom, loading }) => ({
  custom,
  loading: loading.models.custom,
}))
@Form.create()
class Custom extends PureComponent {
  state = {
    modalVisible: false,
    addModalVisible:false,
    modalInfo :{},
    dataSource:[],
    customType:undefined,

    belongCustoms:[],
  };

  columns = [
    {
      title: '海关名称',
      dataIndex: 'customsName',
    },

    {
      title: '海关类型',
      dataIndex: 'customsType',
    },

    {
      title: '海关隶属',
      dataIndex: 'belongto',
    },

    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.modifyItem(text, record)}>修改</a>
          &nbsp;&nbsp;
          <a onClick={() => this.deleteItem(text, record)}>删除</a>
        </Fragment>
      ),
    },
  ];




  componentDidMount() {
    this.init();
  }

  init =()=>{
    const { dispatch } = this.props;
    const params = {};
    dispatch({
      type: 'custom/getCustomsList',
      payload: params,
      callback: (response) => {
        if (response){
          this.state.dataSource = response.data;
        }
      }
    });

  };

  handleFormReset = () => {
    const { form } = this.props;
    form.resetFields();
    this.init();
  };

  onSelectCustomType=(value)=>{
    this.setState({customType:value});
  };

  handleSearch = e=> {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const user = JSON.parse(localStorage.getItem("userinfo"));
      const values = {
        kind :fieldsValue.kind.trim(),
        value: fieldsValue.value.trim(),
        certCode:user.certCode,
      };
      dispatch({
        type: 'custom/getCustomsList',
        payload: values,
        callback: (response) => {
          if (response){
            this.state.dataSource = response.data;
          }
        }
      });
    });
  };

  isValidDate =date=> {
    if(date !==undefined && date !==null ){
      return <span>{moment(date).format('YYYY-MM-DD')}</span>;
    }
    return [];
  };

  modifyItem = text => {
    this.setState({
      modalInfo:text,
    });
    this.setState({customType:text.customsType});
    const { dispatch } = this.props;
    dispatch({
      type: 'custom/getCustomsListByType',
      payload: {},
      callback: (response) => {
        if (response.code === 200) {
          this.state.belongCustoms = response.data;
        }
      }
    });
    this.handleModalVisible(true);
  };

  deleteItem = text =>{
    Modal.confirm({
      title: '确定删除此条记录吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        const { dispatch } = this.props;
        const values = {
          ...text
        };
        dispatch({
          type: 'custom/deleteCustoms',
          payload:values,
          callback: (response) => {
            if(response==="success"){
              this.init();
              message.success("删除成功");
            } else{
              message.success("删除失败");
            }
          }
        });
      }
    });
  };


  addItem = () => {
    this.setState({customType:""});
    const { dispatch } = this.props;
    dispatch({
      type: 'custom/getCustomsListByType',
      payload: {},
      callback: (response) => {
        if (response.code === 200) {
          this.state.belongCustoms = response.data;
        }
      }
    });
    this.addHandleModalVisible(true);
  };




  handleModalVisible = (flag) => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  addHandleModalVisible = (flag) => {
    this.setState({
      addModalVisible: !!flag,
    });
  };

  handleEdit = (fields,modalInfo) => {
    const { dispatch } = this.props;
    let prams = modalInfo;
    prams.customsName =  fields.customsName;
    prams.customsType =  fields.customsType;
    prams.belongto =  fields.belongto;
    const values = {
      ...prams
    };
    dispatch({
      type: 'custom/updateCustoms',
      payload:values,
      callback: (response) => {
        if(response==="success"){
          message.success("保存成功");
          this.init();
        } else {
               message.error("保存失败");
        }
      }
    });
    this.setState({
      modalVisible: false,
    });
  };

  handleAdd = (fields) => {
    const { dispatch } = this.props;
    const user = JSON.parse(localStorage.getItem("userinfo"));
    const values = {
      ...fields,
    };

    this.setState({
      addModalVisible: false,
    });

    if( this.state.dataSource.find(item=>item.customsName === fields.customsName)){
      message.error("添加的海关名称已存在");
      return;
    }

    dispatch({
      type: 'custom/addCustoms',
      payload:values,
      callback: (response) => {
        if(response==="success"){
          message.success("保存成功");
          this.init();
        } else{
               message.error("保存失败");
        }
      }
    });


  };




  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={3} sm={20}>
            <Form.Item
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 6 }}
              colon={false}
            >
              {getFieldDecorator('kind', {
                initialValue:"customsName",
                rules: [{  message: '搜索类型' }],
              })(
                <Select placeholder="搜索类型">
                  <Option value="customsName">海关名称</Option>
                  <Option value="customsType">海关类型</Option>
                  <Option value="belongto">海关隶属</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col md={6} sm={20}>
            <FormItem>
              {getFieldDecorator('value',{rules: [{ message: '搜索数据' }],})(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>

          <Col md={8} sm={20}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <Button type="primary" style={{ marginLeft: 8 }} onClick={this.addItem}>
                新增
              </Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }




  render() {
    const {
      loading,
      dispatch,
    } = this.props;

    const {  modalVisible,modalInfo,addModalVisible,dataSource,customType,belongCustoms} = this.state;
    const belongCustomsOptions = belongCustoms.map(d => <Option key={d.customsName} value={d.customsName}>{d.customsName}</Option>);
    const parentMethods = {
      handleEdit: this.handleEdit,
      handleAdd:this.handleAdd,
      handleModalVisible: this.handleModalVisible,
      addHandleModalVisible:this.addHandleModalVisible,
      onSelectCustomType:this.onSelectCustomType,
    };


    return (
      <PageHeaderWrapper>
        <Card bordered={false} size="small">
          <div className={styles.tableList}>
            <CreateForm {...parentMethods} modalVisible={modalVisible} modalInfo={modalInfo} customType={customType} dispatch={dispatch} belongCustomsOptions={belongCustomsOptions} />
            <AddForm {...parentMethods} addModalVisible={addModalVisible} dispatch={dispatch} customType={customType} belongCustomsOptions={belongCustomsOptions} />
            <div className={styles.tableListForm}>{this.renderSimpleForm()}</div>
            <Table
              size="middle"
              loading={loading}
              dataSource={dataSource}
              columns={this.columns}
              rowKey="itemno"
              pagination={{showQuickJumper:true,showSizeChanger:true}}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Custom;
