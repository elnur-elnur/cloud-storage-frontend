import React from "react";
import styles from "./Auth.module.scss";
import { RegisterFormDTO } from "@/api/dto/auth.dto";
import { Button, Form, Input, notification } from "antd";

import * as Api from "@/api";
import { setCookie } from "nookies";

const RegisterForm: React.FC = () => {
  const onSubmit = async (values: RegisterFormDTO) => {
    try {
      const { token } = await Api.auth.register(values);

      notification.success({
        message: "Ugurla qeydiyyatdan kecdiniz",
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
        label="Ad / Soyad"
        name="fullName"
        rules={[{ required: true, message: "Ad/Soyad", min: 5 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Parol"
        name="password"
        rules={[{ required: true, message: "Parolu daxil edin!", min: 7 }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Qeydiyyat ol
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
