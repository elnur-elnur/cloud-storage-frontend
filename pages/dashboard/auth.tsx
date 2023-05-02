import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import styles from "@/styles/Home.module.css";

import { Tabs } from "antd";
import { url } from "inspector";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main className={styles.mainBg}>
        <h1 className={styles.mainTitle}>Save Your Files Free</h1>
        <div className={styles.tabsBlock}>
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
                children: <RegisterForm />,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};

export default AuthPage;
