import { Table, Dropdown, Button } from "antd";
import styled from "styled-components";
import type { ColumnsType } from "antd/es/table";
import { EyeOutlined, MoreOutlined } from "@ant-design/icons";
import type { InvoiceData } from "../data/InvoiceData";
import { useState } from "react";
import type { InvoiceTableProps } from "../Constants/Interface/InvoiceTable.interface";

const TableWrapper = styled.div`
  margin-top: 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.09);

  .ant-table-pagination {
    width: 100%;
    display: flex !important;
    /* justify-content: center !important; */
    /* justify-content:space-evenly !important; */
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

const InvoiceTable = ({
  data,
  onDelete,
  onView,
  onEdit,
}: InvoiceTableProps) => {
  const [pageSize, setPageSize] = useState(10);

  const columns: ColumnsType<InvoiceData> = [
    { title: "Invoice/Note No.", dataIndex: "invoiceNo", width: 150 },
    { title: "Invoice/Note Date", dataIndex: "invoiceDate", width: 160 },
    { title: "Invoice Type", dataIndex: "invoiceType", width: 150 },
    { title: "Taxable Value", dataIndex: "taxableValue", width: 150 },
    { title: "Invoice Value", dataIndex: "invoiceValue", width: 150 },
    { title: "Supplier GSTIN", dataIndex: "supplierGstin", width: 200 },
    { title: "Customer GSTIN", dataIndex: "customerGstin", width: 200 },
    { title: "Customer Name", dataIndex: "customerName", width: 150 },
    {
      title: "View",
      key: "view",
      width: 80,
      render: (_, record) => (
        <Button
          type="text"
          icon={<EyeOutlined />}
          onClick={() => onView(record)}
        />
      ),
    },

    {
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => {
        const items = [
          { key: "edit", label: "Edit", onClick: () => onEdit(record) },
          {
            key: "delete",
            danger: true,
            label: "Delete",
            onClick: () => onDelete(record),
          },
        ];

        return (
          <Dropdown trigger={["click"]} menu={{ items }}>
            <Button type="text" icon={<MoreOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  return (
    <TableWrapper>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20", "50"],
          onShowSizeChange: (_, size) => setPageSize(size),
          position: ["bottomCenter"], //******************************************************************** */
          // position: ["bottomLeft", "bottomCenter", "bottomRight"],

          showTotal: (total) => `Total ${total} items`,
        }}
        rowSelection={{ type: "checkbox", fixed: false, columnWidth: 48 }}
      />
    </TableWrapper>
  );
};

export default InvoiceTable;
