import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../components/SideBar"

function Index() {
  const location = useLocation();
  const isOnlyApiPath = location.pathname === "/api";

  return (
    <>
      {isOnlyApiPath && <SideBar />}
      <Outlet />
    </>
  );
}

export default Index;
