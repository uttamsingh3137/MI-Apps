import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";

export const StyledSider = styled(Sider)`
  background: #fff !important;
  border-right: 1px solid #eee;
  padding-top: 10px;
`;

export const Brand = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const StyledMenu = styled(Menu)`
  height: 100%;
  border-right: none;
`;