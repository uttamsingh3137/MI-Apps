import { Table, Dropdown, Button } from "antd";
import { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { EyeOutlined, MoreOutlined } from "@ant-design/icons";
import type { InvoiceData } from "../data/InvoiceData";
import EditInvoiceDrawer from "./EditInvoiceDrawer";

interface InvoiceTableProps {
  data: InvoiceData[];
  onDelete: (record: InvoiceData) => void;
  onView: (record: InvoiceData) => void;
}

const InvoiceTable = ({ data, onDelete, onView }: InvoiceTableProps) => {
  const [pageSize, setPageSize] = useState(10);

  const [tableData, setTableData] = useState<InvoiceData[]>(data);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editRecord, setEditRecord] = useState<InvoiceData | null>(null);
  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleEdit = (record: InvoiceData) => {
    setEditRecord(record);
    setDrawerOpen(true);
  };

  const handleDrawerSave = (updated: InvoiceData) => {
    setEditRecord(updated);

    setTableData((prev) =>
      prev.map((row) => (row.id === updated.id ? updated : row))
    );
  };

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
      title: "Actions",
      key: "actions",
      width: 100,
      render: (_, record) => {
        const items = [
          { key: "edit", label: "Edit", onClick: () => handleEdit(record) },
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
  ];

  return (
    <>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={tableData}
        pagination={{
          pageSize,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "50"],
          onShowSizeChange: (_, size) => setPageSize(size),
          position: ["bottomRight"],
        }}
        rowSelection={{ type: "checkbox", fixed: false, columnWidth: 48 }}
        scroll={{ x: "max-content" }}
        style={{ marginTop: 20 }}
      />

      <EditInvoiceDrawer
        open={drawerOpen}
        record={editRecord}
        onClose={() => setDrawerOpen(false)}
        onSave={handleDrawerSave}
      />
    </>
  );
};

export default InvoiceTable;
