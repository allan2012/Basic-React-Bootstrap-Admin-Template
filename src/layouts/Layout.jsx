import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import {Outlet} from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <div className="d-flex">
      <Sidebar/>
      <div style={{marginLeft: '250px', width: 'calc(100% - 250px)'}}>
        <Topbar/>
        <div className="container-fluid mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;