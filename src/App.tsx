/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Form, Input, Button, Select, InputNumber, Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

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
  const [DisabledProp, setDisabledProp] = useState(true);
  const teamActivityOrNot = (e: RadioChangeEvent) => {
    if (e.target.value === 'true') {
      setDisabledProp(false);
    } else {
      setDisabledProp(true);
    }
  };
  const onFinish = (values: unknown) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
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
          <Option value="department">Department</Option>
          <Option value="ACM">ACM</Option>
          <Option value="self">Self</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Number of Students"
        name="numOfStudents"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Is this a team activity?"
        name="team"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group onChange={teamActivityOrNot}>
          <Radio value="true">true</Radio>
          <Radio value="false">false</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="How many team?"
        name="numOfTeams"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber
          min={1}
          max={100}
          disabled={DisabledProp}
          defaultValue={1}
        />
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
