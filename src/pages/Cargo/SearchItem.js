import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import {
  Form,
  Row,
  Col,
  Select,
  Input,
  Button
} from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
import styles from './Search.less';



@connect(({ dict, loading }) => ({
  dict,
  loading: loading.models.dict,
}))
class SearchItem  extends PureComponent {
	handleFormReset = () => {
		const { form ,dispatch} = this.props;
		form.resetFields();
		const user = JSON.parse(localStorage.getItem("main_userinfo"));
		const cargoname =  sessionStorage.getItem('cargoname');
	    const params = {
	      cargoname,
	    };
	    dispatch({
	      type: 'dict/getItemList',
	      payload: params,
	    });
	};

	handleSearch = e=> {
		e.preventDefault();
		const { dispatch, form } = this.props;
		form.validateFields((err, fieldsValue) => {
		  if (err) return;
		  const user = JSON.parse(localStorage.getItem("main_userinfo"));
		  const cargoname =  sessionStorage.getItem('cargoname');
		  const values = {
		    ...fieldsValue,
		    cargoname,
		  };
		  dispatch({
		    type: 'dict/searchItemList',
		    payload: values,
		  });
		});
	};
	render() {
		const {
		  form: { getFieldDecorator },
		  showAdd,
      back,
		} = this.props;
		return (
		  <Form onSubmit={this.handleSearch} layout="inline" hideRequiredMark labelAlign="left">
		    <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
		      <Col span={6}>
		        <FormItem
		          label = '指标名称'
		          labelCol={{span: 8}}
		          wrapperCol={{span: 16}}
		          colon={false}
		        >
		          {getFieldDecorator('itemC',{rules: [{ message: '搜索数据' }],})(
		            <Input placeholder="请输入" />
		        )}
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
		          <Button type="primary"  style={{ marginLeft: 8 }} onClick={showAdd}>
		            新增
		          </Button>
                 <Button type="primary" style={{ marginLeft: 8}} onClick={back}>
                返回
              </Button>
		        </span>
		      </Col>
		    </Row>
		  </Form>

		);
	}
}
export default SearchItem;
