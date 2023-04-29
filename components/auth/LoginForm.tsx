import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import styles from "./Auth.module.scss";

const LoginForm: React.FC = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form name="basic" labelCol={{ span: 8 }} onFinish={onSubmit}>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: "E-mail adressinizi daxil edin!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Parol"
        name="password"
        rules={[{ required: true, message: "Parolu daxil edin!" }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Daxil ol
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
