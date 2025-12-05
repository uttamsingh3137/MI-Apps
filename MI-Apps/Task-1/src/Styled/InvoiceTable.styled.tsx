import styled from "styled-components";

export const TableWrapper = styled.div`
  margin-top: 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.09);

  .ant-table-pagination {
    width: 100%;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center;
    padding-left:  24px;
    padding-right:  24px;
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



  .ant-table-thead > tr > th {
    background: #e7e5e5 !important;
    color: #444;
    padding: 10px 12px !important;
    border-bottom: 1px solid #e8e8e8 !important;
  }
`;