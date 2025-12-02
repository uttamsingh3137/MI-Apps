import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Sider } = Layout;


const StyledSider = styled(Sider)`
  background: #fff !important;
  border-right: 1px solid #eee;
  padding-top: 10px;
`;

const Brand = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const StyledMenu = styled(Menu)`
  height: 100%;
  border-right: none;
`;


const Sidebar: React.FC = () => {
  return (
    <StyledSider width={220}>
      <Brand>Masters India</Brand>

      <StyledMenu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={[
          {
            key: "dashboard",
            icon: <DashboardOutlined />,
            label: "Dashboard",
          },
          {
            key: "data-import",
            icon: <DatabaseOutlined />,
            label: "Data Import",
          },
          {
            key: "gst-return",
            icon: <FileTextOutlined />,
            label: "GST Return",
          },
          {
            key: "notices",
            icon: <BellOutlined />,
            label: "Notices & Orders",
          },
          {
            key: "settings",
            icon: <SettingOutlined />,
            label: "Configurations",
          },
        ]}
      />
    </StyledSider>
  );
};

export default Sidebar;
