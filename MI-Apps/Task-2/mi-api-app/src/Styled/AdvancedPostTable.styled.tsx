import styled from "styled-components";

export const TableWrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  .ant-table-pagination {
    display: flex;
    justify-content: center;  
  }

  .ant-pagination-total-text {
    order: -1;
    margin-right: auto;
    align-self: center;
  }
  
  .ant-pagination-options {
    order: 1;
    margin-left: auto;
    align-self: center;
  }
  
  .ant-pagination {
    order: 0;
    margin: 0 auto;
  }
`;
