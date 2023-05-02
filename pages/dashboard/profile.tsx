import { User } from "@/api/dto/auth.dto";
import { checkAuth } from "@/utils/checkAuth";
import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";

import * as Api from "@/api";
import { Button } from "antd";
import LayoutComponent from "@/layouts/Layout";

interface Props {
  userData: User;
}

const DashboardProfilePage: NextPage<Props> = ({ userData }) => {
  const onLogutSubmit = () => {
    if (window.confirm("Deqiq cixis etmek isteyirsiniz ?")) {
      Api.auth.logout();
      location.href = "/dashboard";
    }
  };

  return (
    <main>
      <p style={{ fontSize: 18 }}>
        Ad: <b>{userData.fullName}</b>
      </p>
      <p style={{ fontSize: 18 }}>
        Email: <b>{userData.email}</b>
      </p>
      <p style={{ fontSize: 18 }}>
        ID: <b>{userData.id}</b>
      </p>

      <Button
        style={{
          marginTop: "30px",
          fontSize: 16,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onLogutSubmit}
        type="primary"
        danger
      >
        cixis et
      </Button>
    </main>
  );
};
//@ts-ignore
DashboardProfilePage.getLayout = (page: React.ReactNode) => {
  return <LayoutComponent title="profile">{page}</LayoutComponent>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  const userData = await Api.auth.getMe();

  return {
    props: {
      userData,
    },
  };
};

export default DashboardProfilePage;
