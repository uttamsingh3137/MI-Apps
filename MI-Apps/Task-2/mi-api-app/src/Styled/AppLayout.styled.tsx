import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const FullLayout = styled(Layout)`
  min-height: 100vh;
`;

export const MainLayout = styled(Layout)`
  background: #f5f7fa;
`;

export const StyledContent = styled(Content)`
  padding: 20px;
  background: #f5f7fa;
`;