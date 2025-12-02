import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  return (
    <Sider
      width={220}
      style={{
        background: "#fff",
        borderRight: "1px solid #eee",
        paddingTop: 10,
      }}
    >
      <div
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginLeft: 20,
          marginBottom: 10,
        }}
      >
        Masters India
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        style={{ height: "100%" }}
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
    </Sider>
  );
};

export default Sidebar;
