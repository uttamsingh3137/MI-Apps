import { Header } from "antd/es/layout/layout";
import styled from "styled-components";


export const StyledHeader = styled(Header)`
  background: #fff !important;
  padding: 0 20px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
`;

export const TitleText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const HeaderIcon = styled.span`
  font-size: 20px;
  cursor: pointer;
`;
