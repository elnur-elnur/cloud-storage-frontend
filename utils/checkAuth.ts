import axios from "axios";
import * as Api from "@/api";
import nookies from "nookies";
import { GetServerSidePropsContext } from "next";

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
  const { _token } = nookies.get(ctx);

  axios.defaults.headers.Authorization = "Bearer " + _token;

  try {
    await Api.auth.getMe();

    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/dashboard/auth",
        permanet: false,
      },
    };
  }
};
