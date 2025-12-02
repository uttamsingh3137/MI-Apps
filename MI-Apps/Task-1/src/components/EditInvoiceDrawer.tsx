import { Drawer, Form, Input, Button } from "antd";
import type { InvoiceData } from "../data/InvoiceData";

interface EditInvoiceDrawerProps {
  open: boolean;
  record: InvoiceData | null;
  onClose: () => void;
  onSave: (updated: InvoiceData) => void;
}

const EditInvoiceDrawer = ({
  open,
  record,
  onClose,
  onSave,
}: EditInvoiceDrawerProps) => {
  if (!record) return null;

  const handleChange = (field: keyof InvoiceData, value: string) => {
    if (!record) return;
    onSave({ ...record, [field]: value });
  };

  return (
    <Drawer
      title="Edit Invoice Details"
      width={720}
      open={open}
      onClose={onClose}
    >
      <Form layout="vertical">
        <Form.Item label="Invoice No">
          <Input
            value={record.invoiceNo}
            readOnly
            style={{
              background: "#f5f5f5",
              cursor: "not-allowed",
            }}
          />
        </Form.Item>

        <Form.Item label="Invoice Date">
          <Input
            value={record.invoiceDate}
            readOnly
            style={{
              background: "#f5f5f5",
              cursor: "not-allowed",
            }}
          />
        </Form.Item>

        <Form.Item label="Invoice Type">
          <Input
            value={record.invoiceType}
            readOnly
            style={{
              background: "#f5f5f5",
              cursor: "not-allowed",
            }}
          />
        </Form.Item>

        <Form.Item label="Taxable Value">
          <Input
            value={record.taxableValue}
            readOnly
            style={{
              background: "#f5f5f5",
              cursor: "not-allowed",
            }}
          />
        </Form.Item>

        <Form.Item label="Invoice Value">
          <Input
            value={record.invoiceValue}
            readOnly
            style={{
              background: "#f5f5f5",
              cursor: "not-allowed",
            }}
          />
        </Form.Item>

        <Form.Item label="Customer Name">
          <Input
            value={record.customerName}
            readOnly
            style={{
              background: "#f5f5f5",
              cursor: "not-allowed",
            }}
          />
        </Form.Item>

        {/* Editable */}
        <Form.Item label="Customer GSTIN">
          <Input
            value={record.customerGstin}
            onChange={(e) => handleChange("customerGstin", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Supplier GSTIN">
          <Input
            value={record.supplierGstin}
            onChange={(e) => handleChange("supplierGstin", e.target.value)}
          />
        </Form.Item>

        <Button
          type="primary"
          style={{ marginTop: 20 }}
          onClick={() => {
            onSave(record);
            onClose();
          }}
        >
          Save Changes
        </Button>
      </Form>
    </Drawer>
  );
};

export default EditInvoiceDrawer;
