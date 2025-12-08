import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e5e6eb;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const ScrollArea = styled.div`
  max-height: calc(100vh - 250px);
  overflow-y: auto;
  padding-right: 6px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d0d3d8;
    border-radius: 50px;
  }
`;