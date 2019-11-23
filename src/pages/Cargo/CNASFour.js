import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { formatMessage } from 'umi-plugin-react/locale';

import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Select,
  Table, message, Modal, DatePicker, Icon,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import moment from 'moment';
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
      title="检查项目修改"
      style={{ top: 100 }}
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >


      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="检查项目">
        {form.getFieldDecorator('checkProject', {
          initialValue: modalInfo.checkProject,
          rules: [
            {
              required: true,
              message: "请输入检查项目",
            },
          ],
        })(<Input placeholder="请输入检查项目" />)}
      </FormItem>


    </Modal>
  );
});


const AddForm = Form.create()(props => {
  const { addModalVisible, form, handleAdd, addHandleModalVisible } = props;
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
      title="检查项目新增"
      style={{ top: 100 }}
      visible={addModalVisible}
      onOk={okHandle}
      onCancel={() => addHandleModalVisible()}
    >



      <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="检查项目">
        {form.getFieldDecorator('checkProject', {
          rules: [
            {
              required: true,
              message: "请输入检查项目",
            },
          ],
        })(<Input placeholder="请输入检查项目" />)}
      </FormItem>

    </Modal>
  );
});


@connect(({ cnas, loading }) => ({
  cnas,
  loading: loading.models.cnas,
}))
@Form.create()
class CNASFour extends PureComponent {
  state = {
    modalVisible: false,
    addModalVisible:false,
    modalInfo :{},
    dataSource:[],
  };

  columns = [

    {
      title: '检查项目',
      dataIndex: 'checkProject',
    },

    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.deleteItem(text, record)}>删除</a>
          &nbsp;&nbsp;
          <a onClick={() => this.modifyItem(text, record)}>修改</a>
          &nbsp;&nbsp;
        </Fragment>
      ),
    },
  ];

  componentDidMount() {
    this.init();
  }


  // 返回
  back = () => {
    this.props.history.goBack();
  };




  init =()=>{
    const { dispatch } = this.props;
    const code =  sessionStorage.getItem('cnasThree_checkCode');
    dispatch({
      type: 'cnas/getCNASLevelFourList',
      payload:{code},
      callback: (response) => {
        if (response){
          this.state.dataSource = response.data;
        }
      }
    });
  }



  handleFormReset = () => {
    const { form } = this.props;
    form.resetFields();
    this.init();
  }

  handleSearch = e=> {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const code =  sessionStorage.getItem('cnasThree_checkCode');
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        kind :fieldsValue.kind.trim(),
        value: fieldsValue.value.trim(),
        code,
      };
      dispatch({
        type: 'cnas/getCNASLevelFourList',
        payload: values,
        callback: (response) => {
          if (response){
            this.state.dataSource = response.data;
          }
        }
      });
    });
  }

  isValidDate =date=> {
    if(date !==undefined && date !==null ){
      return <span>{moment(date).format('YYYY-MM-DD')}</span>;
    }
    return [];
  }

  modifyItem = text => {
    this.setState({
      modalInfo:text,
    });
    this.handleModalVisible(true);
  };

  deleteItem = text =>{
    const { dispatch } = this.props;
    const values = {
      keyno:text.keyno,
    };
    dispatch({
      type: 'cnas/deleteCNASLevelFour',
      payload:values,
      callback: (response) => {
        if(response==="success"){
          message.success("删除成功");
          this.init();
        } else{
          message.success("删除失败");
        }
      }
    });

  }


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
    prams.checkProject =  fields.checkProject;
    const values = {
      ...prams,
    };
    dispatch({
      type: 'cnas/updateCNASLevelFour',
      payload:values,
      callback: (response) => {
        if(response==="success"){
          message.success("修改成功");
          this.init();
        } else{
          message.success("修改失败");
        }
      }
    });
    this.setState({
      modalVisible: false,
    });
  }

  handleAdd = (fields) => {
    const { dispatch } = this.props;
    const code =  sessionStorage.getItem('cnasThree_checkCode');
    const values = {
      ...fields,
      checkCode:code,
    };
    dispatch({
      type: 'cnas/addCNASLevelFour',
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
    this.setState({
      addModalVisible: false,
    });
  }




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
                initialValue:"checkProject",
                rules: [{  message: '搜索类型' }],
              })(
                <Select placeholder="搜索类型">
                  <Option value="checkProject">项目名称</Option>

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
              <Button style={{ marginLeft: 8  ,paddingLeft:0}} type="primary" onClick={this.back}><Icon type="left" />返回</Button>
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
              rowKey="sort1"
              pagination={{showQuickJumper:true,showSizeChanger:true}}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default CNASFour;
