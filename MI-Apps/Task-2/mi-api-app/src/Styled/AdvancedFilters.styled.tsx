import { Input, Select } from "antd";
import styled from "styled-components";

export const FilterBox = styled.div`
  padding: 16px;
  background: #fff;
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const TitleInput = styled(Input)`
  width: 220px;
`;

export const UserSelect = styled(Select)`
  width: 150px;
`;

export const BodyInput = styled(Input)`
  width: 240px;
`;
