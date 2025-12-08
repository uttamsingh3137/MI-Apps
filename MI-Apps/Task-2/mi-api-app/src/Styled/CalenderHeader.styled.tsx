import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-top: 12px;
  padding: 0 8px; 
  position: relative;
`;

export const MonthCentered = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 600;
`;