import { GetServerSidePropsContext } from "next";
import React from "react";
import nookies from "nookies";
import axios from "axios";

import * as Api from "@/api";

import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Header from "@/components/header";
import { checkAuth } from "@/utils/checkAuth";

const { Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const DashboardPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header />

      <Layout>
        <Sider
          width={200}
          style={{ background: colorBgContainer, height: "100vh" }}
        >
          {/* <Menu
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
            items={[
              { key: "/", label: "Files" },
              { key: "/", label: "Trash" },
            ]}
          /> */}
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  return {
    props: {},
  };
};
