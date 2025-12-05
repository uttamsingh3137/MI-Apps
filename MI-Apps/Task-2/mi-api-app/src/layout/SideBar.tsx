import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import appRoutes from "../config/menuConfig";
import { Brand, StyledSider, StyledMenu } from "../Styled/SideBar.styled";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const findActiveKey = () => {
    const pathname = location.pathname;

    // "/" should behave like "/dashboard"
    const currentPath = pathname === "/" ? "/dashboard" : pathname;

    const exact = appRoutes.find((r) => r.path === currentPath);
    if (exact) return exact.key;

    const prefix = appRoutes.find(
      (r) => r.path !== "/" && currentPath.startsWith(r.path)
    );
    if (prefix) return prefix.key;

    return "";
  };

  const selectedKey = findActiveKey();

  return (
    <StyledSider width={220}>
      <Brand>
        <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
          Masters India
        </Link>
      </Brand>

      <StyledMenu mode="inline" selectedKeys={[selectedKey]}>
        {appRoutes
          .filter((r) => r.key !== "home")
          .map((r) => (
            <Menu.Item key={r.key} icon={r.icon}>
              <Link to={r.path}>{r.label}</Link>
            </Menu.Item>
          ))}
      </StyledMenu>
    </StyledSider>
  );
};

export default Sidebar;
