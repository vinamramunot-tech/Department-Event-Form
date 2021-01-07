/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Form, Input, Button, Select } from 'antd';

const layout = {
  labelCol: {
    offset: 4,
    span: 9,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 12,
    span: 8,
  },
};

const FormDiv = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Who Covers the first Meal"
        name="firstMeal"
        rules={[
          {
            required: true,
            message: 'Please enter who is going to cover for first meal?',
          },
        ]}
      >
        <Select placeholder="Select an option">
          <Option value="noMeal">No Meal</Option>
          <Option value="department">Department</Option>
          <Option value="ACM">ACM</Option>
          <Option value="self">Self</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Who Covers the second Meal"
        name="secondMeal"
        rules={[
          {
            message: 'Please enter who is going to cover for the second meal?',
          },
        ]}
      >
        <Select placeholder="Select an option">
          <Option value="No meal">No Meal</Option>
          <Option value="ACM">ACM</Option>
          <Option value="self">Self</Option>
        </Select>
      </Form.Item>
      <br />
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Download
        </Button>
      </Form.Item>
    </Form>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={FormDiv} />
      </Switch>
    </Router>
  );
}
