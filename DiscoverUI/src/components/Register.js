import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './Register.css';
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


const Register = () => {
  const [form] = Form.useForm();
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const [isRegistered, setRegisterStatus] = useState(false);

  const onFinish = (values) => {
    setRegisterStatus(true);
  };

  if(isRegistered){
    return <Redirect to='/home' />
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+91">+91</Option>
        <Option value="+44">+44</Option>
        <Option value="">Other</Option>
      </Select>
    </Form.Item>
  );

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <div className="registerForm">
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      labelAlign="left"
      onFinish={onFinish}
      initialValues={{
        prefix: '+44'
      }}
      scrollToFirstError
    >
      <Form.Item className='registerTitle'>
        <h1>Register</h1>
      </Form.Item>
      <Form.Item
        name="username"
        label="Username"
        tooltip="C-Id / P-Id"
        labelAlign="left"
        rules={[
          {
            required: true,
            message: 'Please input your user name'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="firstname"
        label="First Name"
        labelAlign="left"
        rules={[
          {
            required: true,
            message: 'Please input your first name'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastname"
        label="Last Name"
        labelAlign="left"
        rules={[
          {
            required: true,
            message: 'Please input your last name'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
        Register
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Register