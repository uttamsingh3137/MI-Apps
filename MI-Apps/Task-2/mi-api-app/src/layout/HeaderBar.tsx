import React, { useState } from "react";
import { Layout, Space, Badge, Drawer, Popover, Menu, Dropdown } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const { Header } = Layout;


const StyledHeader = styled(Header)`
  background: #fff !important;
  padding: 0 20px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
`;

const TitleText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const HeaderIcon = styled.span`
  font-size: 20px;
  cursor: pointer;
`;


const userMenuItems = [
  { key: "profile", label: "My Profile" },
  { key: "settings", label: "Settings" },
  { type: "divider" as const },
  { key: "logout", danger: true, label: "Logout" },
];


const HeaderBar: React.FC = () => {
  const [notifOpen, setNotifOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const onUserMenuClick = (info: any) => {
    if (info.key === "logout") {
      alert("Logged out!");
    } else {
      alert(`Clicked: ${info.key}`);
    }
  };

  return (
    <StyledHeader>
      
      <Space>
        <HeaderIcon>
          <SearchOutlined />
        </HeaderIcon>
        <TitleText>Dashboard</TitleText>
      </Space>


      <Space size="large">
        {/* Notifications Icon */}
        <Badge count={3} size="small">
          <HeaderIcon onClick={() => setNotifOpen(true)}>
            <BellOutlined />
          </HeaderIcon>
        </Badge>


        <Popover
          title="Quick Settings"
          trigger="click"
          open={settingsOpen}
          onOpenChange={setSettingsOpen}
          content={
            <div>
              <p>Dark Mode</p>
              <p>Customize Layout</p>
              <p>Help & Support</p>
            </div>
          }
        >
          <HeaderIcon>
            <SettingOutlined />
          </HeaderIcon>
        </Popover>


        <Dropdown menu={{ items: userMenuItems, onClick: onUserMenuClick }} trigger={["click"]}>
          <HeaderIcon>
            <UserOutlined />
          </HeaderIcon>
        </Dropdown>
      </Space>

      <Drawer
        title="Notifications"
        placement="right"
        width={350}
        open={notifOpen}
        onClose={() => setNotifOpen(false)}
      >
        <p>🔔 New form update available</p>
        <p>🔔 Scheduled maintenance tomorrow</p>
        <p>🔔 Your GST filing is due soon</p>
      </Drawer>
    </StyledHeader>
  );
};

export default HeaderBar;
