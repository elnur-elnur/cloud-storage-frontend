import LayoutComponent from "@/layouts/Layout";
import React from "react";
import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/utils/checkAuth";

const TrashPage = () => {
  return <div>trash</div>;
};

TrashPage.getLayout = (page: React.ReactNode) => {
  return <LayoutComponent title="photos">{page}</LayoutComponent>;
};



export default TrashPage;
