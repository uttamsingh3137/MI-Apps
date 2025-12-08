import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const CardWrapper = styled.div`
  background: #f7f9fc;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 14px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.05);
  border: 1px solid #e6e8ec;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
`;

export const Title = styled(Text)`
  font-size: 15px;
  font-weight: 600;
`;

export const Subtitle = styled(Text)`
  display: block;
  font-size: 13px;
  margin-bottom: 8px;
  color: #5a5f66;
`;

export const Description = styled(Text)`
  display: block;
  margin-bottom: 8px;
  color: #8a8f96;
  font-size: 13px;
`;

export const TagRow = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 8px;
`;


export const Period = styled(Text)`
  margin-top: 6px;
  font-size: 13px;
  color: #8a8f96;
  display: block;
`;
