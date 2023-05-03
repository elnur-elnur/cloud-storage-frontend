import { GetServerSidePropsContext, NextPage } from "next";
import React from "react";

import { checkAuth } from "@/utils/checkAuth";
import LayoutComponent from "@/layouts/Layout";

import * as Api from "@/api";
import { FileItem } from "@/api/dto/files.dto";
import FileList from "@/components/fileList";
import { FileActions } from "@/components/fileActions";

interface Props {
  items: FileItem[];
}

const DashboardPage: NextPage<Props> = ({ items }) => {
  return (
    <main>
      <FileActions />
      <FileList items={items} />
    </main>
  );
};

//@ts-ignore
DashboardPage.getLayout = (page: React.ReactNode) => {
  return <LayoutComponent title="dashboard">{page}</LayoutComponent>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAll();

    return {
      props: {
        items,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        items: [],
      },
    };
  }
};

export default DashboardPage;
