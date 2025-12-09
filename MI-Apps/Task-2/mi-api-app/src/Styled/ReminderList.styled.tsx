import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;                      
  display: flex;                    
  flex-direction: column;           
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e5e6eb;
  padding: 16px;
  overflow: hidden;                  
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
`;

export const ScrollArea = styled.div`
  flex: 1 1 auto;                   
  overflow-y: auto;                  
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;                      
  }
  &::-webkit-scrollbar-thumb {
    background: #c7c9cf;
    border-radius: 8px;
  }

  scrollbar-width: thin;            
  scrollbar-color: #c7c9cf transparent;
`;
