/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Form, Button, Select, InputNumber, Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import TextArea from 'antd/lib/input/TextArea';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';

const layout = {
  labelCol: {
    offset: 0,
    span: 9,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 12,
    span: 8,
  },
};

const RadioSelectForMeals = () => {
  return (
    <Select placeholder="Select an option">
      <Select.Option value="noMeal">No Meal</Select.Option>
      <Select.Option value="department">Department</Select.Option>
      <Select.Option value="ACM">ACM</Select.Option>
      <Select.Option value="self">Self</Select.Option>
    </Select>
  );
};

const FormDiv = () => {
  const [requiredProp, setRequiredProp] = useState(true);
  const [DisabledProp, setDisabledProp] = useState(true);
  const [AdvertisementProp, setAdvertisementProp] = useState(true);
  const teamActivityOrNot = (e: RadioChangeEvent) => {
    if (e.target.value === 'true') {
      setDisabledProp(false);
    } else {
      setDisabledProp(true);
      setRequiredProp(false);
    }
  };

  const AdvertisementOrNot = (e: RadioChangeEvent) => {
    if (e.target.value === 'true') {
      setAdvertisementProp(false);
    } else {
      setAdvertisementProp(true);
    }
  };
  const onFinish = (values: JSON) => {
    console.log(values);
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(values)
    )}`;
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'event_form.json');
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<JSON>) => {
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
        label="Who covered the first Meal"
        labelAlign="left"
        name="Who payed for the first meal?"
        rules={[
          {
            required: true,
            message: 'Please enter who is going to cover for first meal?',
          },
        ]}
      >
        <RadioSelectForMeals />
      </Form.Item>

      <Form.Item
        label="Who covered the second Meal"
        labelAlign="left"
        name="Who payed for the second meal?"
      >
        <RadioSelectForMeals />
      </Form.Item>
      <Form.Item
        label="Number of Students"
        labelAlign="left"
        name="Number of Students Attended"
        rules={[
          {
            required: true,
            message:
              'Please enter the number of students that attended the event',
          },
        ]}
      >
        <InputNumber min={1} max={100} defaultValue={1} />
      </Form.Item>

      <Form.Item
        label="Was this a team activity?"
        labelAlign="left"
        name="Team activity"
        rules={[
          {
            required: true,
            message: 'Choose one option!',
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
        labelAlign="left"
        name="Number of Teams"
        rules={[
          {
            required: requiredProp,
            message: 'How many teams participated?',
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

      <Form.Item
        label="Rules for Entry"
        labelAlign="left"
        name="Rules for entry"
        rules={[
          {
            required: true,
            message: 'What are the rules for entry?',
          },
        ]}
      >
        <TextArea rows={4} autoSize showCount allowClear />
      </Form.Item>

      <Form.Item
        label="Is there an advertisement plan?"
        labelAlign="left"
        name="Advertisement Plan"
        rules={[
          {
            required: true,
            message: 'Who is going to take the photos and advertise the event?',
          },
        ]}
      >
        <Radio.Group onChange={AdvertisementOrNot}>
          <Radio value="true">true</Radio>
          <Radio value="false">false</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Advertisement Plans"
        labelAlign="left"
        name="Advertisement Plans"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={4}
          disabled={AdvertisementProp}
          autoSize
          showCount
          allowClear
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
