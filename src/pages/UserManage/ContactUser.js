import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva/index';
import router from 'umi/router';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';


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
  const { modalVisible, form, handleEdit, handleModalVisible,modalInfo } = props;
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
      title="用户信息修改"
      style={{ top: 10 }}
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="用户名">
        {form.getFieldDecorator('username', {
          initialValue: modalInfo.username,
          rules: [
            {
              required: true,
              message: formatMessage({ id: 'validation.username.required' }),
            },
          ],
        })(<Input placeholder="请输入用户名" disabled />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="密码">
        {form.getFieldDecorator('password', {
          initialValue: modalInfo.password,
          rules: [
            {
              required: true,
              message: "请输入密码",
            },
          ],
        })(<Input placeholder="请输入密码" />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="姓名">
        {form.getFieldDecorator('contactName', {
          initialValue: modalInfo.contactName,
          rules: [
            {
              required: true,
              message: "请输入姓名",
            },
          ],
        })(<Input placeholder="请输入姓名" />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="公司">
        {form.getFieldDecorator('companyName', {
          initialValue: modalInfo.companyName,
          rules: [
            {
              required: true,
              message: "请输入公司",
            },
          ],
        })(<Input placeholder="请输入公司" />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="手机">
        {form.getFieldDecorator('contactPhone', {
          initialValue: modalInfo.contactPhone,
          rules: [
            {
              required: true,
              message: "请输入手机",
            },
          ],
        })(<Input placeholder="请输入手机" />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="可见性">
        {form.getFieldDecorator('isvisible', {
          initialValue: modalInfo.isvisible,
          rules: [
            {
              required: true,
              message: "请选择手机可见性",
            },
          ],
        })(
          <Select placeholder="请选择可见性" style={{width:'100%'}}>
            <Option value="可见">可见</Option>
            <Option value="不可见">不可见</Option>
          </Select>
        )}
      </FormItem>


    </Modal>
  );
});


const AddForm = Form.create()(props => {
  const { addModalVisible, form, handleAdd, addHandleModalVisible,dispatch} = props;
  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };

  const checkUserName = (rule, value, callback) => {
    dispatch({
      type: 'Contact/getRepeatUsername',
      payload:{username:value},
      callback: (response) => {
        if (response===undefined || response === "error") {
          callback(formatMessage({ id: 'validation.userExist.error' }));
        } else if(response === "repeat"){
          callback(formatMessage({ id: 'validation.userExist.repeated' }));
        }else{
          callback();
        }
      }
    });
  };

  return (
    <Modal
      destroyOnClose
      title="用户信息新增"
      style={{ top: 10 }}
      visible={addModalVisible}
      onOk={okHandle}
      onCancel={() => addHandleModalVisible()}
    >

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="用户名">
        {form.getFieldDecorator('username', {
          rules: [
            {
              required: true,
              message: formatMessage({ id: 'validation.username.required' }),
            },
            {
              validator: checkUserName,
            },
          ],
        })(
          <Input size="large" placeholder={formatMessage({ id: 'form.username.placeholder' })} />
        )}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="密码">
        {form.getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: "请输入密码",
            },
          ],
        })(<Input placeholder="请输入密码" />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="姓名">
        {form.getFieldDecorator('contactName', {
          rules: [
            {
              required: true,
              message: "请输入姓名",
            },
          ],
        })(<Input placeholder="请输入姓名" />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="公司">
        {form.getFieldDecorator('companyName', {
          rules: [
            {
              required: true,
              message: "请输入公司",
            },
          ],
        })(<Input placeholder="请输入公司" />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="手机">
        {form.getFieldDecorator('contactPhone', {
          rules: [
            {
              required: true,
              message: "请输入手机",
            },
          ],
        })(<Input placeholder="请输入手机" />)}
      </FormItem>

      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="可见性">
        {form.getFieldDecorator('isvisible', {
          rules: [
            {
              required: true,
              message: "请选择手机可见性",
            },
          ],
        })(
          <Select placeholder="请选择可见性" style={{width:'100%'}}>
            <Option value="可见">可见</Option>
            <Option value="不可见">不可见</Option>
          </Select>
        )}
      </FormItem>

    </Modal>
  );
});


@connect(({ Contact, loading }) => ({
  Contact,
  loading: loading.models.Contact,
}))
@Form.create()
class Contact extends PureComponent {
  state = {
    modalVisible: false,
    addModalVisible:false,
    modalInfo :{},
    dataSource:[],
  };

  columns = [
    {
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '密码',
      dataIndex: 'password',
    },
    {
      title: '姓名',
      dataIndex: 'contactName',
    },
    {
      title: '公司',
      dataIndex: 'companyName',
    },
    {
      title: '手机',
      dataIndex: 'contactPhone',
    },
    {
      title: '手机可见性',
      dataIndex: 'isvisible',
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
      type: 'Contact/getContactList',
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

  handleSearch = e=> {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        kind :fieldsValue.kind.trim(),
        value: fieldsValue.value.trim(),
      };
      dispatch({
        type: 'Contact/getContactList',
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
    this.handleModalVisible(true);
  };

  deleteItem = text =>{
    const { dispatch } = this.props;
    const values = {
      ...text
    };
    dispatch({
      type: 'Contact/deleteContact',
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
  };


  addItem = () => {
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
    prams.username =  fields.username;
    prams.password =  fields.password;
    prams.isvisible =  fields.isvisible;
    prams.contactName =  fields.contactName;
    prams.contactPhone =  fields.contactPhone;
    prams.companyName =  fields.companyName;
    const values = {
      ...prams
    };
    dispatch({
      type: 'Contact/updateContact',
      payload:values,
      callback: (response) => {
        if(response==="success"){
          message.success("保存成功");
          this.init();
        } else {
          message.success("保存失败");
        }
      }
    });
    this.setState({
      modalVisible: false,
    });
  };

  handleAdd = (fields) => {
    const { dispatch } = this.props;
    const values = {
      ...fields,
    };
    this.setState({
      addModalVisible: false,
    });
    if( this.state.dataSource.find(item=>item.username === fields.username)){
      message.success("添加项目已存在");
      return;
    }

    dispatch({
      type: 'Contact/addContact',
      payload:values,
      callback: (response) => {
        if(response==="success"){
          message.success("保存成功");
          this.init();
        } else{
          message.success("保存失败");
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
                initialValue:"username",
                rules: [{  message: '搜索类型' }],
              })(
                <Select placeholder="搜索类型">
                  <Option value="username">用户名</Option>
                  <Option value="password">密码</Option>
                  <Option value="contactName">姓名</Option>
                  <Option value="companyName">公司</Option>
                  <Option value="contactPhone">手机</Option>
                  <Option value="isvisible">手机可见性</Option>
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

    const {  modalVisible,modalInfo,addModalVisible,dataSource} = this.state;
    const parentMethods = {
      handleEdit: this.handleEdit,
      handleAdd:this.handleAdd,
      handleModalVisible: this.handleModalVisible,
      addHandleModalVisible:this.addHandleModalVisible,
    };


    return (
      <PageHeaderWrapper>
        <Card bordered={false} size="small">
          <div className={styles.tableList}>
            <CreateForm {...parentMethods} modalVisible={modalVisible} modalInfo={modalInfo} dispatch={dispatch} />
            <AddForm {...parentMethods} addModalVisible={addModalVisible} dispatch={dispatch} />
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

export default Contact;
