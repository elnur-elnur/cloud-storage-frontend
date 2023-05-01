import React from "react";
import { CloudOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, Popover } from "antd";

import styles from "./Header.module.scss";
import { useRouter } from "next/router";

import * as Api from "@/api";

const Header = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const logOut = () => {
    if (window.confirm("deqiq cixis etmek isteyirsiniz ?")) {
      Api.auth.logout();
      location.href = "/dashboard/auth";
    }
  };

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined style={{ fontSize: "34px" }} />
            Project Cloud
          </h2>

          <Menu
            mode="horizontal"
            className={styles.topMenu}
            defaultSelectedKeys={[selectedMenu]}
            onClick={({ key }) => router.push(key)}
            items={[
              { key: "/dashboard", label: "Home" },
              { key: "/dashboard/profile", label: "Profile" },
            ]}
          />
        </div>

        <div className={styles.headerRight}>
          <Popover
            trigger="click"
            content={
              <Button type="primary" danger onClick={logOut}>
                cixis
              </Button>
            }
          >
            <Avatar>E</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;
