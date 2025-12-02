import { Drawer, Form, Input, Button } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import type { InvoiceData } from "../data/InvoiceData";

interface EditInvoiceDrawerProps {
  open: boolean;
  record: InvoiceData | null;
  onClose: () => void;
  onSave: (updated: InvoiceData) => void;
}

const ReadOnlyInput = styled(Input)`
  background: #f5f5f5 !important;
  cursor: not-allowed;
`;

const SaveButton = styled(Button)`
  margin-top: 20px;
`;

const EditInvoiceDrawer = ({ open, record, onClose, onSave }: EditInvoiceDrawerProps) => {
  const [localRecord, setLocalRecord] = useState<InvoiceData | null>(record);

  // Update local state whenever record changes
  useEffect(() => {
    setLocalRecord(record);
  }, [record]);

  if (!localRecord) return null;

  const handleChange = (field: keyof InvoiceData, value: string) => {
    setLocalRecord({ ...localRecord, [field]: value });
  };

  return (
    <Drawer
      title="Edit Invoice Details"
      width={720}
      open={open}
      onClose={onClose}
      destroyOnClose
    >
      <Form layout="vertical">
        <Form.Item label="Invoice No">
          <ReadOnlyInput value={localRecord.invoiceNo} readOnly />
        </Form.Item>

        <Form.Item label="Invoice Date">
          <ReadOnlyInput value={localRecord.invoiceDate} readOnly />
        </Form.Item>

        <Form.Item label="Invoice Type">
          <ReadOnlyInput value={localRecord.invoiceType} readOnly />
        </Form.Item>

        <Form.Item label="Taxable Value">
          <ReadOnlyInput value={localRecord.taxableValue} readOnly />
        </Form.Item>

        <Form.Item label="Invoice Value">
          <ReadOnlyInput value={localRecord.invoiceValue} readOnly />
        </Form.Item>

        <Form.Item label="Customer Name">
          <ReadOnlyInput value={localRecord.customerName} readOnly />
        </Form.Item>

        {/* Editable fields */}
        <Form.Item label="Customer GSTIN">
          <Input
            value={localRecord.customerGstin}
            onChange={(e) => handleChange("customerGstin", e.target.value)}
          />
        </Form.Item>

        <Form.Item label="Supplier GSTIN">
          <Input
            value={localRecord.supplierGstin}
            onChange={(e) => handleChange("supplierGstin", e.target.value)}
          />
        </Form.Item>

        <SaveButton
          type="primary"
          onClick={() => {
            onSave(localRecord);
            onClose();
          }}
        >
          Save Changes
        </SaveButton>
      </Form>
    </Drawer>
  );
};

export default EditInvoiceDrawer;
