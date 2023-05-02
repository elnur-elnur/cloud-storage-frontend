import { GetServerSidePropsContext, NextPage } from "next";
import LayoutComponent from "@/layouts/Layout";
import React from "react";
import { FileItem } from "@/api/dto/files.dto";
import * as Api from "@/api";
import { checkAuth } from "@/utils/checkAuth";
import FileList from "@/components/fileList";

interface Props {
  items: FileItem[];
}

const PhotosPage: NextPage<Props> = ({ items }) => {
  return <FileList items={items} />;
};

PhotosPage.getLayout = (page: React.ReactNode) => {
  return <LayoutComponent title="dashboard">{page}</LayoutComponent>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAll("photos");

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

export default PhotosPage;
