import React, { useState } from "react";
import {  Space, Badge, Drawer, Popover, Dropdown, message } from "antd";
import { SearchOutlined, BellOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import appRoutes from "../config/menuConfig";
import { HeaderIcon, StyledHeader, TitleText } from "../Styled/HeaderBar.styled";
import { userMenuItems } from "../Constants/Interfaces/HeaderBar.interface";




const HeaderBar: React.FC = () => {
  const [notifOpen, setNotifOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const location = useLocation();

  const findRoute = () => {
    const pathname = location.pathname;
    const exact = appRoutes.find((r) => r.path === pathname);
    if (exact) return exact;
    const prefix = appRoutes.find((r) => r.path !== "/" && pathname.startsWith(r.path));
    if (prefix) return prefix;
    return appRoutes.find((r) => r.key === "home");
  };

  const currentRoute = findRoute();
  const currentTitle = currentRoute?.title ?? currentRoute?.label ?? "Masters India";

  const onUserMenuClick = () => {
    message.success("Coming Soon" , 3)
  };

  return (
    <StyledHeader>
      <Space>
        <HeaderIcon>
          <SearchOutlined />
        </HeaderIcon>

       
        <TitleText>
          {/* <Link to="/" style={{ color: "inherit", textDecoration: "none" }}> */}
            {currentTitle}
          {/* </Link> */}
        </TitleText>
      </Space>

      <Space size="large">
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

      <Drawer title="Notifications" placement="right" size={350} open={notifOpen} onClose={() => setNotifOpen(false)}>
        <p>🔔 New form update available</p>
        <p>🔔 Scheduled maintenance tomorrow</p>
        <p>🔔 Your GST filing is due soon</p>
      </Drawer>
    </StyledHeader>
  );
};

export default HeaderBar;
