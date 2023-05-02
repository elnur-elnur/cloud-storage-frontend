import Header from "@/components/header";
import Head from "next/head";
import React, { PropsWithChildren } from "react";
import { Breadcrumb, Button, Layout, Menu } from "antd";
import type { MenuProps } from "antd";

import {
  FileOutlined,
  FileImageOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { UploadButton } from "@/components/uploadButton";
import { useRouter } from "next/router";

interface LayoutProps {
  title: string;
}

const { Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const LayoutComponent: React.FC<PropsWithChildren<LayoutProps>> = ({
  title,
  children,
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Header />

        <Layout>
          <Sider width={200} style={{ background: "white", height: "100vh" }}>
            <UploadButton />

            <Menu
              mode="inline"
              defaultActiveFirst
              style={{ height: "100%", borderRight: 0 }}
              items={[
                {
                  key: "/files",
                  label: "Files",
                  icon: <FileOutlined />,
                  onClick: () => router.push("/dashboard"),
                },
                {
                  key: "/photos",
                  label: "Photos",
                  icon: <FileImageOutlined />,
                  onClick: () => router.push("/dashboard/photos"),
                },
                {
                  key: "/trash",
                  label: "Trash",
                  icon: <DeleteOutlined />,
                  onClick: () => router.push("/dashboard/trash"),
                },
              ]}
            />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: "white",
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </main>
    </>
  );
};

export default LayoutComponent;
