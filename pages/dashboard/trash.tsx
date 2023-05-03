import LayoutComponent from "@/layouts/Layout";
import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/utils/checkAuth";
import { FileItem } from "@/api/dto/files.dto";
import FileList from "@/components/fileList";
import * as Api from "@/api";

interface Props {
  items: FileItem[];
}

const TrashPage: NextPage<Props> = ({ items }) => {
  return <FileList items={items} />;
};

//@ts-ignore
TrashPage.getLayout = (page: React.ReactNode) => {
  return <LayoutComponent title="trash">{page}</LayoutComponent>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAll("trash");

    return {
      props: {
        items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { items: [] },
    };
  }
};

export default TrashPage;
