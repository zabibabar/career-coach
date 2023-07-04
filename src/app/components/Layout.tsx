import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import { Box } from "@mui/material";
import Head from "next/head";

type LayoutProps = { title: string } & PropsWithChildren;

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Box sx={{ flexGrow: 1, pb: 8 }}>{children}</Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
