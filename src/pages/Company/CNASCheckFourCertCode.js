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
  Table, message, Modal, DatePicker, Cascader,Checkbox
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import moment from 'moment';
import styles from '../table.less';

const FormItem = Form.Item;
const { Option } = Select;
const CheckboxGroup = Checkbox.Group;




// 修改的Form
const CreateForm = Form.create()(props => {
  const { modalVisible, form, handleEdit, handleModalVisible,modalInfo,cnsOptions ,checkProjectOptions,checkProjectExist,checkCode} = props;
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
      title="修改CNAS检查分类"
      style={{ top: 100 }}
      width={1000}
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <Form>
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="CNAS分类">
          {form.getFieldDecorator('checkCode', {
            initialValue:checkCode,
            rules: [
              {
                required: true,
                message: "选择CNAS分类",
              },
            ],
          })( <Cascader options={cnsOptions} placeholder="选择CNAS分类" disabled />)}
        </FormItem>

        <Form.Item labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="检查项目">
          {form.getFieldDecorator('checkProject', {
            initialValue:checkProjectExist,
            rules: [{ message: '检查项目'}],
          })(
            <CheckboxGroup
              options={checkProjectOptions}
            />
          )}
        </Form.Item>

      </Form>


    </Modal>
  );
});


const AddForm = Form.create()(props => {
  const { addModalVisible, form, handleAdd, addHandleModalVisible,cnsOptions,checkProjectOptions} = props;
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
      title="新增CNAS检查分类"
      style={{ top: 100 }}
      width={1000}
      visible={addModalVisible}
      onOk={okHandle}
      onCancel={() => addHandleModalVisible()}
    >
      <Form>
        <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="CNAS分类">
          {form.getFieldDecorator('checkCode', {
            rules: [
              {
                required: true,
                message: "选择CNAS分类",
              },
            ],
          })( <Cascader options={cnsOptions} placeholder="选择CNAS分类" />)}
        </FormItem>

        <Form.Item labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="检查项目">
          {form.getFieldDecorator('checkProject', {
            rules: [{message: '检查项目'}],
          })(
            <CheckboxGroup
              options={checkProjectOptions}
            />
          )}
        </Form.Item>

      </Form>

    </Modal>
  );
});


@connect(({ company, loading }) => ({
  company,
  loading: loading.models.company,
}))
@Form.create()
class CNASCheckFourCertCode extends PureComponent {
  state = {
    modalVisible: false,
    addModalVisible:false,
    modalInfo :{},
    dataSource:[],
    cnsOptions:[],

    checkProjectOptions:[],
    checkProjectExist:[],
    checkCode:[],
  };


  columns = [


    {
      title: 'CNAS一级分类',
      dataIndex: 'domainName',
    },
    {
      title: 'CNAS二级分类',
      dataIndex: 'subDomainName',
    },
    {
      title: 'CNAS三级分类',
      dataIndex: 'checkName',
    },

    {
      title: '检查项目',
      dataIndex: 'checkProject',
      render: (text, record) => {
        if(typeof(text) === undefined || text === null){
          return;
        }
        let  contentStr = [];
        contentStr = text.split("|");
        if (contentStr.length < 2) {
          return text;
        }
        let result = null;
        const br = <br></br>;
        for( let  j=0 ; j < contentStr.length ; j++){
          if(j===0){
            result=contentStr[j];
          }else{
            result=<span>{result}{br}{contentStr[j]}</span>;
          }
        }
        return <div>{result}</div>;
      },
    },

    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.modifyItem(text, record)}>修改</a>
        </Fragment>
      ),
    },
  ];

  componentDidMount() {
    this.init();
    // 加载cnas数据
    const { dispatch } = this.props;
    dispatch({
      type: 'cnasinfo/getCnasLevelInfo',
      callback: (response) => {
        if (response) {
          this.state.cnsOptions = response;
        }
      }
    });
  }


  init =()=> {
    const { dispatch } = this.props;
    const certCode = sessionStorage.getItem('goCNASCheckFourCertCodeListInfo_CertCode');
    const params = {
      certCode,
    };

    // 获得cnas选项
    dispatch({
      type: 'company/getCNASCheckFourCertCodeListInfo',
      payload: params,
      callback: (response) => {
        if (response) {
          this.state.dataSource = response.data;
        }
      }
    });





  };

  handleFormReset = () => {
    const { form } = this.props;
    form.resetFields();
    this.init();
  }

  handleSearch = e=> {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      // eslint-disable-next-line prefer-destructuring
      const certCode = sessionStorage.getItem('goCNASCheckFourCertCodeListInfo_CertCode');
      const values = {
        kind :fieldsValue.kind.trim(),
        value: fieldsValue.value.trim(),
        certCode,
      };

      dispatch({
        type: 'company/getCNASCheckFourCertCodeListInfo',
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

    // 获得检查选项
    const {dispatch} = this.props;
    // 获得检查选项
    dispatch({
      type: 'cnasinfo/getCNASLevelFourList',
      payload: {code:text.checkCode},
      callback: (response) => {
        if (response) {
          this.state.checkProjectOptions = [];
          if(response.data !==undefined){
            for( let  j=0 ; j < response.data.length ; j++){
              this.state.checkProjectOptions.push(response.data[j].checkProject);
            }
          }

          // 修改时已选的分类
          this.state.checkCode = [];
          this.state.checkCode.push(text.checkCode.substring(0,2));
          this.state.checkCode.push(text.checkCode.substring(0,4));
          this.state.checkCode.push(text.checkCode);

          // 设置已经存在的检查项目
          let  contentStr = [];
          if(text.checkProject!==undefined){
            contentStr = text.checkProject.split("|");
          }
         this.state.checkProjectExist = contentStr;


        }
        this.handleModalVisible(true);
      }
    });


  };




  deleteItem = text =>{
    const { dispatch } = this.props;
    const values = {
      ...text
    };
    dispatch({
      type: 'company/deleteCompany',
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
    prams.namec =  fields.namec;
    prams.adres =  fields.adres;
    prams.tel =  fields.tel;
    prams.certcode =  fields.certcode;
    prams.bank =  fields.bank;
    prams.belongto =  fields.belongto;
    prams.namee =  fields.namee;
    const values = {
      ...prams
    };
    dispatch({
      type: 'company/updateCompany',
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
  }

  handleAdd = (fields) => {
    const { dispatch } = this.props;
    const values = {
      ...fields,
    };
    dispatch({
      type: 'company/addCompany',
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

  };

  // 返回
  back = () => {
    this.props.history.goBack();
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
                initialValue:"domainName",
                rules: [{  message: '搜索类型' }],
              })(
                <Select placeholder="搜索类型">
                  <Option value="domainName">一级分类</Option>
                  <Option value="subDomainName">二级分类</Option>
                  <Option value="checkName">三级分类</Option>
                  <Option value="checkProject">检查项目</Option>
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
              <Button type="primary" style={{ marginLeft: 8 }} onClick={this.back}>
                返回
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

    const {  modalVisible,modalInfo,addModalVisible,dataSource,cnsOptions,checkProjectOptions,checkProjectExist,checkCode} = this.state;
    const parentMethods = {
      handleEdit: this.handleEdit,
      handleAdd:this.handleAdd,
      handleModalVisible: this.handleModalVisible,
      addHandleModalVisible:this.addHandleModalVisible,

    };


    return (
      <PageHeaderWrapper>
        <Card bordered={false} size="middle">
          <div className={styles.tableList}>
            <CreateForm {...parentMethods} modalVisible={modalVisible} modalInfo={modalInfo} dispatch={dispatch} cnsOptions={cnsOptions} checkProjectOptions={checkProjectOptions} checkProjectExist={checkProjectExist} checkCode={checkCode} />
            <AddForm {...parentMethods} addModalVisible={addModalVisible} dispatch={dispatch} cnsOptions={cnsOptions} checkProjectOptions={checkProjectOptions} checkProjectExist={checkProjectExist} checkCode={checkCode}/>
            <div className={styles.tableListForm}>{this.renderSimpleForm()}</div>
            <Table
              size="middle"
              loading={loading}
              dataSource={dataSource}
              columns={this.columns}
              rowKey="keyno"
              pagination={{showQuickJumper:true,showSizeChanger:true}}
            />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default CNASCheckFourCertCode;
