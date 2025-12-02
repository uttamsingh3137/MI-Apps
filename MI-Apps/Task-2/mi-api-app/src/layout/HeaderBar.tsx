import React, { useState } from "react";
import { Layout, Space, Badge, Drawer, Popover, Menu, Dropdown } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const HeaderBar: React.FC = () => {
  const [notifOpen, setNotifOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const userMenu = (
    <Menu
      items={[
        { key: "profile", label: "My Profile" },
        { key: "settings", label: "Settings" },
        { type: "divider" },
        { key: "logout", danger: true, label: "Logout" },
      ]}
      onClick={(info) => {
        if (info.key === "logout") {
          alert("Logged out!");
        } else {
          alert(`Clicked: ${info.key}`);
        }
      }}
    />
  );

  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #eee",
      }}
    >
      
      <Space>
        <SearchOutlined style={{ fontSize: 20 }} />
        <span style={{ fontSize: 18, fontWeight: 600 }}>Dashboard</span>
      </Space>

      {/* RIGHT SECTION */}
      <Space size="large">

        {/* 🔔 Bell (Notification Drawer) */}
        <Badge count={3} size="small">
          <BellOutlined
            style={{ fontSize: 20, cursor: "pointer" }}
            onClick={() => setNotifOpen(true)}
          />
        </Badge>

        {/* ⚙ Settings (Popover) */}
        <Popover
          title="Quick Settings"
          trigger="click"
          open={settingsOpen}
          onOpenChange={(open) => setSettingsOpen(open)}
          content={
            <div>
              <p>Dark Mode</p>
              <p>Customize Layout</p>
              <p>Help & Support</p>
            </div>
          }
        >
          <SettingOutlined style={{ fontSize: 20, cursor: "pointer" }} />
        </Popover>

        <Dropdown menu={{ items: userMenu.props.items, onClick: userMenu.props.onClick }} trigger={["click"]}>
          <UserOutlined style={{ fontSize: 20, cursor: "pointer" }} />
        </Dropdown>

      </Space>

      <Drawer
        title="Notifications"
        placement="right"
        width={350}
        onClose={() => setNotifOpen(false)}
        open={notifOpen}
      >
        <p>🔔 New form update available</p>
        <p>🔔 Scheduled maintenance tomorrow</p>
        <p>🔔 Your GST filing is due soon</p>
      </Drawer>
    </Header>
  );
};

export default HeaderBar;
