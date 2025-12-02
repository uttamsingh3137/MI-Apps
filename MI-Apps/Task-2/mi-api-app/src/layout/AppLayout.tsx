import React from "react";
import { Layout } from "antd";
import Sidebar from "./SideBar";
import HeaderBar from "./HeaderBar";


const { Content } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT MAIN AREA */}
      <Layout>
        {/* TOP HEADER */}
        <HeaderBar />

        {/* MAIN CONTENT */}
        <Content style={{ padding: "20px", background: "#f5f7fa" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
