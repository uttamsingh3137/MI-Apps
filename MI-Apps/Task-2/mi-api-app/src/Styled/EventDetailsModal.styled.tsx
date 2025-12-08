import { Tag, Typography } from "antd";
import styled from "styled-components";
const { Text } = Typography;

export const Wrapper = styled.div`
  padding: 6px;
`;


export const DateText = styled(Text)`
  font-size: 15px;
  font-weight: 600;
  display: block;
  padding-bottom: 12px;  
`;


export const CardBlock = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 14px 16px 16px 16px;
  border-left: 4px solid #1e90ff;
  position: relative;
`;


export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;


export const PriorityTag = styled(Tag)`
  border-radius: 20px;
  padding: 2px 10px;
  font-size: 12px;
  height: fit-content;
`;


export const Subtitle = styled(Text)`
  color: #6b7280;
  font-size: 13px;
  margin-top: 4px;
`;


export const Description = styled(Text)`
  display: block;
  margin-top: 8px;
  color: #4b5563;
`;

export const Period = styled(Text)`
  display: block;
  margin-top: 10px;
  font-size: 13px;
  color: #9ca3af;
`;


export const Status = styled(Text)`
  display: block;
  margin-top: 4px;
  font-size: 13px;
  color: #dc2626;
`;