import { Button, Input, Row, Select } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`

  width: 100%;
  padding: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  margin-bottom: 20px;
  background: #fff;
`;

export const ToggleButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const IconWrapper = styled.span`
  font-size: 12px;
  opacity: 0.7;
`;

export const StyledInput = styled(Input)`
  height: 38px;
  border-radius: 6px;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  height: 38px;
`;

export const SpacedRow = styled(Row)`
  margin-top: 20px;
`;