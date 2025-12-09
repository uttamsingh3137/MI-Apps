import styled from "styled-components";

export const CalendarWrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
`;

export const DayCellWrapper = styled.div<{ selected?: boolean; faded?: boolean }>`
  border-radius: 10px;
  padding: 8px;
  height: 95px;

  background: ${({ faded }) => (faded ? "#fafafa" : "#fff")};
  border: ${({ selected }) => (selected ? "2px solid #165DFF" : "1px solid #eee")};

  cursor: pointer;
  transition: 0.2s;

  display: flex;
  flex-direction: column;

  min-height: 0;
  overflow: hidden; 

  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.06);
  }
`;


export const DayNumber = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const EventTag = styled.div`
  background: #1677ff;
  color: white;
  padding: 3px 6px;
  border-radius: 6px;
  font-size: 12px;
  margin-top: 4px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;


export const EventScrollArea = styled.div`
  flex: 1 1 auto;
  margin-top: 4px;
  overflow-y: auto;
  min-height: 0;


  &::-webkit-scrollbar {
    display: none;
  }


  scrollbar-width: none;


  -ms-overflow-style: none;
`;