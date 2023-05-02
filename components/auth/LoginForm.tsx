import React from "react";
import { Button, Form, Input, notification } from "antd";
import styles from "./Auth.module.scss";
import { LoginFormDTO } from "@/api/dto/auth.dto";

import * as Api from "@/api";
import { setCookie } from "nookies";

const LoginForm: React.FC = () => {
  const onSubmit = async (values: LoginFormDTO) => {
    try {
      const { token } = await Api.auth.login(values);

      notification.success({
        message: "Ugurla daxil oldunuz",
        description: "Admin panele kecid",
        duration: 2,
      });

      setCookie(null, "_token", token, {
        path: "/",
      });

      location.href = "/dashboard";
    } catch (error) {
      console.warn("Login form err", error);

      notification.error({
        message: "Səhf!",
        description: "Login və ya Parol düzgün deyil",
        duration: 2,
      });
    }
  };

  return (
    <Form name="basic" labelCol={{ span: 8 }} onFinish={onSubmit}>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          { required: true, message: "Mail adressinizi daxil edin!" },
          { type: "email" },
        ]}
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Daxil ol
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
