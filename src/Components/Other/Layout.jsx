import React from "react";
import { Outlet } from "react-router-dom";
import PageHeader from "../Header/PageHeader";



const Layout = ({ isMobile }) => {
  return (
    <>
      <PageHeader isMobile={isMobile} />
      <Outlet />
      
    </>
  );
};
export { Layout };
