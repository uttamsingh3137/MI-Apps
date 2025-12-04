import { Button, Select, Space } from "antd";
import styled from "styled-components";


export const FilterBar = styled(Space)`
  margin-bottom: 20px;
`;

export const CardBox = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3`
  margin-bottom: 12px;
`;

export const StatsText = styled.div`
  margin-top: 10px;
  font-size: 15px;
`;

export const StyledSelect = styled(Select)`
  width: 200px;
`;

export const StyledButton = styled(Button)`
  min-width: 110px;
`;