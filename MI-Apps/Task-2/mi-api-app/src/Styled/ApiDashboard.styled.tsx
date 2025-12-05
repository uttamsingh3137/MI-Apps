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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
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


