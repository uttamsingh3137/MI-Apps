import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import Sidebar from "./SideBar";
import HeaderBar from "./HeaderBar";

const { Content } = Layout;


const FullLayout = styled(Layout)`
  min-height: 100vh;
`;

const MainLayout = styled(Layout)`
  background: #f5f7fa;
`;

const StyledContent = styled(Content)`
  padding: 20px;
  background: #f5f7fa;
`;


const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FullLayout>
      <Sidebar />

      <MainLayout>
        <HeaderBar />

        <StyledContent>{children}</StyledContent>
      </MainLayout>
    </FullLayout>
  );
};

export default AppLayout;
