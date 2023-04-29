import LoginForm from "@/components/auth/LoginForm";
import { Tabs } from "antd";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main style={{ width: 400, margin: "40px auto" }}>
        <Tabs
          items={[
            {
              label: "Daxil ol",
              key: "1",
              children: <LoginForm />,
            },
            {
              label: "Qeydiyyatdan kec",
              key: "2",
              children: <h1>Qeydiyyat ol</h1>,
            },
          ]}
        />
      </main>
    </>
  );
};

export default AuthPage;
