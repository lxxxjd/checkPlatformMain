import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import router from 'umi/router';

import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Select,
  Table, message, Modal, DatePicker,
  Cascader,
  notification
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import moment from 'moment';
import styles from '../table.less';
import Search from './Search.js'

const FormItem = Form.Item;
const { Option } = Select;

const SearchForm = Form.create()(Search);


/* eslint react/no-multi-comp:0 */
@connect(({ dict, loading }) => ({
  dict,
  loading: loading.models.dict,
}))
@Form.create()
class CargoInfo extends PureComponent {
  state = {
    visible: false ,
    modalInfo : {} ,
    keyno: null,
    cnsOptions:[],

    cargosort:[],

  };

  columns = [
    {
      title: '检查品名',
      dataIndex: 'cargonamec',
    },
    {
      title: '英文名',
      dataIndex: 'cargonamee',
    },
    {
      title: '货物分类',
      dataIndex: 'cargosort',
    },
    {
      title: 'CNS编码',
      dataIndex: 'checkCode',
    },
    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.previewItem(text, record)}>查看指标</a>
          &nbsp;&nbsp;
          <a onClick={() => this.modifyItem(text, record)}>修改</a>
          &nbsp;&nbsp;
          <a onClick={() => this.deleteItem(text, record)}>删除</a>
        </Fragment>
      ),
    },
  ];
  deleteItem = text =>{
    const { dispatch } = this.props;
    dispatch({
      type: 'dict/deleteCargo',
      payload: {
        keyno : text.keyno,
      },
      callback: (response) => {
        if (response.code === 200) {
          notification.open({
            message: '删除成功',
          });
          this.componentDidMount();
        } else {
          notification.open({
            message: '删除失败',
            description: response.message,
          });
        }
      }
    });
  }



  componentDidMount() {
    // const user = JSON.parse(localStorage.getItem("main_userinfo"));
    const { dispatch } = this.props;
    const params = {
      // certCode:user.certCode
    };
    dispatch({
      type: 'dict/getCargos',
      payload: params,
    });

    dispatch({
      type: 'cnas/getCnasLevelInfo',
      payload: {},
      callback: (response) => {
        if(response){
          this.state.cnsOptions = response;
        }
      }
    });

    dispatch({
      type: 'dict/getCargoInfo',
      payload: {},
      callback: (response) => {
        if(response.code ===200){
          this.state.cargosort = response.data;
        }
      }
    });




  }

  isValidDate =date=> {
    if(date !==undefined && date !==null ){
      return <span>{moment(date).format('YYYY-MM-DD')}</span>;
    }
    return [];
  };


  previewItem = text => {
    sessionStorage.setItem('cargoname',text.cargonamec);
    router.push({
      pathname:'/Cargo/ItemList',
    });
  };

  modifyItem = text => {
    const {form} = this.props;
    this.setState( { visible : true });
    this.setState( { keyno : text.keyno });
    var checkCode = [];
    checkCode.push(text.checkCode.substring(0,2));
    checkCode.push(text.checkCode.substring(0,4));
    checkCode.push(text.checkCode);
    if(text.cargosort!==undefined){
      const cargosort = text.cargosort.split(" ");
      form.setFieldsValue({
        cargosort
      });
    }

    form.setFieldsValue({
      'cargonamec': text.cargonamec,
      'cargonamee': text.cargonamee,
      'checkCode': checkCode,
    });
  };

  handleOk = () => {
    const {
      form: {validateFieldsAndScroll},
      dispatch,
    } = this.props;
    const { keyno } = this.state;
    validateFieldsAndScroll((error, values) => {
      values.checkCode = values.checkCode[2];
      const params = {
        cargonamec: values.cargonamec,
        cargonamee: values.cargonamee,
        checkCode: values.checkCode,
        cargosort: values.cargosort.join(" "),
        keyno,
      };
      if (!error) {
        // submit the values
        if(keyno !== null){
          dispatch({
            type: 'dict/updateCargo',
            payload:params,
            callback: (response) => {
              if (response.code === 200) {
                notification.open({
                  message: '修改成功',
                });
                this.componentDidMount();
                this.setState({visible:false})
              } else {
                notification.open({
                  message: '修改失败',
                  description: response.message,
                });
              }
            }
          });
        }else {
          dispatch({
            type: 'dict/addCargo',
            payload:params,
            callback: (response) => {
              if (response.code === 200) {
                notification.open({
                  message: '添加成功',
                });
                this.componentDidMount();
                this.setState( {visible:false} )
              } else {
                notification.open({
                  message: '添加失败',
                  description: response.message,
                });
              }
            }
          });
        }
      }
    });
  };

  showAdd = () => {
    const{form} = this.props;
    form.resetFields();
    this.setState( { keyno : null } ) ;
    this.setState( { visible : true } );

  };

  handleCancel = () => {
    this.setState( { visible : false } );
  };


  render() {
    const {
      dict: {cargos},
      loading,
      dispatch,
      form:{getFieldDecorator}
    } = this.props;

    const {  visible } = this.state;

    const parentMethods = {
      showAdd: this.showAdd,
      componentDidMount:this.componentDidMount,
    };

    return (
      <PageHeaderWrapper>
        <Card bordered={false} size="small">
          <div className={styles.tableListForm}><SearchForm {...parentMethods}></SearchForm></div>
          <div className={styles.tableList}>
            <Table
              style={{marginTop:10}}
              size="middle"
              loading={loading}
              dataSource={cargos}
              columns={this.columns}
              rowKey="cargonamec"
              pagination={{showQuickJumper:true,showSizeChanger:true}}
            />
          </div>
        </Card>
        <Modal
            title="货物信息"
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <Form>
              <Form.Item label="检查品名">
                {getFieldDecorator('cargonamec', {
                  rules: [{ required: true, message: '请选择分包实验室' }],
                })(
                     <Input />
                  )}
              </Form.Item>
              <Form.Item label="英文名">
                {getFieldDecorator('cargonamee', {
                  rules: [{ required: true, message: '请输入总计费用' }],
                })(
                    <Input />
                  )}
              </Form.Item>
              <Form.Item label="选择CNAS分类">
                {getFieldDecorator('checkCode', {
                  rules: [{ required: true, message: '选择CNAS分类' }],
                })(
                    <Cascader options={this.state.cnsOptions} placeholder="选择CNAS分类" />
                  )}
              </Form.Item>
              <Form.Item label="货物分类">
                {getFieldDecorator('cargosort', {
                  rules: [{ required: true, message: '选择货物分类' }],
                })(
                  <Cascader options={this.state.cargosort} placeholder="选择货物分类" />
                )}
              </Form.Item>
            </Form>
          </Modal>
      </PageHeaderWrapper>
    );
  }
}

export default CargoInfo;
