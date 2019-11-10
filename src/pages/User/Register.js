import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';
import router from 'umi/router';
import { Form, Input, Button, Modal, Select, Row, Col, Popover, Progress } from 'antd';
import styles from './Register.less';

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;

const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <FormattedMessage id="validation.password.strength.strong" />
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <FormattedMessage id="validation.password.strength.medium" />
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <FormattedMessage id="validation.password.strength.short" />
    </div>
  ),
};

const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

@connect(({ register, loading }) => ({
  register,
  submitting: loading.effects['register/submit'],
}))
@Form.create()
class Register extends Component {
  state = {
    count: 0,
    confirmDirty: false,
    visible: false,
    help: '',
    prefix: '86',
  };

  componentDidUpdate() {
    const { form, register } = this.props;
    const account = form.getFieldValue('mail');
    if (register.status === 'ok') {
      router.push({
        pathname: '/user/register-result',
        state: {
          account,
        },
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onGetCaptcha = () => {
    let count = 59;
    this.setState({ count });
    this.interval = setInterval(() => {
      count -= 1;
      this.setState({ count });
      if (count === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
    Modal.info({
      title: formatMessage({ id: 'app.login.verification-code-warning' }),
    });
  };

  getPasswordStatus = () => {
    const { form } = this.props;
    const value = form.getFieldValue('prepassword');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'poor';
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    console.log("test")
    form.validateFields({ force: true }, (err, values) => {
      if (!err) {
        const { prefix } = this.state;
        dispatch({
          type: 'register/submit',
          payload: {
            ...values,
            prefix,
          },
        });
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    const { confirmDirty } = this.state;
    this.setState({ confirmDirty: confirmDirty || !!value });
  };

  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('prepassword')) {
      callback(formatMessage({ id: 'validation.password.twice' }));
    } else {
      callback();
    }
  };

  checkUsername = (rule, value,callback) => {

    console.log(value);
    const { dispatch } = this.props;
    if (value!==undefined || value!=="") {
      const params={username:value};
      dispatch({
        type: 'register/checkUserName',
        payload:params,
        callback: (response) => {
          if(response){
            if(response ==="success"){
              callback();
            }else{
              callback(formatMessage({ id: 'username is repeated' }));
            }
          }
        }
      });
    }
  }

  checkPassword = (rule, value, callback) => {
    const { visible, confirmDirty } = this.state;
    if (!value) {
      this.setState({
        help: formatMessage({ id: 'validation.password.required' }),
        visible: !!value,
      });
      callback('error');
    } else {
      this.setState({
        help: '',
      });
      if (!visible) {
        this.setState({
          visible: !!value,
        });
      }
      if (value.length < 6) {
        callback('error');
      } else {
        const { form } = this.props;
        if (value && confirmDirty) {
          form.validateFields(['password'], { force: true });
        }
        callback();
      }
    }
  };

  changePrefix = value => {
    this.setState({
      prefix: value,
    });
  };

  renderPasswordProgress = () => {
    const { form } = this.props;
    const value = form.getFieldValue('prepassword');
    const passwordStatus = this.getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };

  render() {
    const { form, submitting } = this.props;
    const { getFieldDecorator } = form;
    const { count, prefix, help, visible } = this.state;
    return (
      <div className={styles.main}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            <Row gutter={4}>
              <Col span={6}>公司名：</Col>
              <Col span={18}>
                {getFieldDecorator('company', {
                rules: [
                  {
                    required: true,
                    message:"请输入正确的公司",
                  },
                ],
              })(
                <Input size="large" placeholder="请输入正确的公司名" />
              )}
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row gutter={4}>
              <Col span={6}>证书编号头：</Col>
              <Col span={18}>
                {getFieldDecorator('certcode', {
                  rules: [
                    {
                      required: true,
                      message: "请输入CertCode",
                    },
                  ],
                })(
                  <Input
                    size="large"
                    placeholder="请输入CertCode"
                  />
                )}
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row gutter={4}>
              <Col span={6}>用户名：</Col>
              <Col span={18}>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({ id: 'username is repeated' }),
                    },
                    {
                      validator:this.checkUsername,
                    }
                  ],
                })(
                  <Input
                    size="large"
                    placeholder="请输入用户名"
                  />
                )}
              </Col>
            </Row>
          </FormItem>
          <FormItem help={help}>
            <Row gutter={4}>
              <Col span={6}>注册密码：</Col>
              <Col span={18}>
                <Popover
                  getPopupContainer={node => node.parentNode}
                  content={
                    <div style={{ padding: '4px 0' }}>
                      {passwordStatusMap[this.getPasswordStatus()]}
                      {this.renderPasswordProgress()}
                      <div style={{ marginTop: 10 }}>
                        <FormattedMessage id="validation.password.strength.msg" />
                      </div>
                    </div>
                  }
                  overlayStyle={{ width: 240 }}
                  placement="right"
                  visible={visible}
                >
                  {getFieldDecorator('prepassword', {
                    rules: [
                      {
                        required: true,
                        message:"请输入密码",
                      },
                      {
                        validator: this.checkPassword,
                      },
                    ],
                  })(
                    <Input
                      size="large"
                      type="password"
                      placeholder={formatMessage({ id: 'form.password.placeholder' })}
                    />
                  )}
                </Popover>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row gutter={4}>
              <Col span={6}>重输密码：</Col>
              <Col span={18}>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({ id: 'validation.confirm-password.required' }),
                    },
                    {
                      validator: this.checkConfirm,
                    },
                  ],
                })(
                  <Input
                    size="large"
                    type="password"
                    placeholder={formatMessage({ id: 'form.confirm-password.placeholder' })}
                  />
                )}
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row gutter={4}>
              <Col span={6}>联系人：</Col>
              <Col span={18}>
                {getFieldDecorator('contact', {
                  rules: [
                    {
                      required: true,
                      message: "请输入联系人",
                    },
                  ],
                })(
                  <Input
                    size="large"
                    placeholder="请输入联系人"
                  />
                )}
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row gutter={4}>
              <Col span={6}>手机号码：</Col>
              <Col span={18}>
                <InputGroup compact>
                  {getFieldDecorator('tel', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage({ id: 'validation.phone-number.required' }),
                      },
                      {
                        pattern: /^\d{11}$/,
                        message: formatMessage({ id: 'validation.phone-number.wrong-format' }),
                      },
                    ],
                  })(
                    <Input
                      size="large"
                      placeholder={formatMessage({ id: 'form.phone-number.placeholder' })}
                    />
                  )}
                </InputGroup>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Row gutter={4}>
              <Col span={6}>验证码：</Col>
              <Col span={10}>
                {getFieldDecorator('veritycode', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({ id: 'validation.verification-code.required' }),
                    },
                  ],
                })(
                  <Input
                    size="large"
                    placeholder={formatMessage({ id: 'form.verification-code.placeholder' })}
                  />
                )}
              </Col>
              <Col span={8}>
                <Button
                  size="large"
                  disabled={count}
                  className={styles.getCaptcha}
                  onClick={this.onGetCaptcha}
                >
                  {count
                    ? `${count} s`
                    : formatMessage({ id: 'app.register.get-verification-code' })}
                </Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Button
              size="large"
              loading={submitting}
              className={styles.submit}
              type="primary"
              htmlType="submit"
            >
              <FormattedMessage id="app.register.register" />
            </Button>
            <Link className={styles.login} to="/User/Login">
              <FormattedMessage id="app.register.sign-in" />
            </Link>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Register;
