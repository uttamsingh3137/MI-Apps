import { Drawer, Form, Input } from "antd";
import { useEffect, useState } from "react";
import type { InvoiceData } from "../data/InvoiceData";
import { ReadOnlyInput, SaveButton } from "../Styled/EditInvoiceDrawer.styled";
import type { EditInvoiceDrawerProps } from "../Constants/Interface/EditInvoiceDrawer.interface";

const EditInvoiceDrawer = ({
  open,
  record,
  onClose,
  onSave,
}: EditInvoiceDrawerProps) => {
  const [localRecord, setLocalRecord] = useState<InvoiceData | null>(record);
  const [customerError, setCustomerError] = useState("");
  const [supplierError, setSupplierError] = useState("");

  // Update krne ke liye local state whenever record changes
  useEffect(() => {
    if (open) {
      setCustomerError("");
      setSupplierError("");
      setLocalRecord(record);
    }
  }, [open, record]);

  if (!localRecord) return null;

  const validateGST = (field: "customer" | "supplier", value: string) => {
    if (field === "customer") {
      if (!value.trim()) {
        setCustomerError("Customer GSTIN cannot be empty");
      } else if (value === localRecord.supplierGstin) {
        setCustomerError("Customer & Supplier GSTIN cannot be the same");
      } else {
        setCustomerError("");
      }
    }

    if (field === "supplier") {
      if (!value.trim()) {
        setSupplierError("Supplier GSTIN cannot be empty");
      } else if (value === localRecord.customerGstin) {
        setSupplierError("Supplier & Customer GSTIN cannot be the same");
      } else {
        setSupplierError("");
      }
    }
  };

  const handleChange = (field: keyof InvoiceData, value: string) => {
    setLocalRecord({ ...localRecord, [field]: value });

    if (field === "customerGstin") validateGST("customer", value);
    if (field === "supplierGstin") validateGST("supplier", value);
  };

  return (
    <Drawer
      title="Edit Invoice Details"
      size={720}
      open={open}
      onClose={onClose}
      maskClosable={false}
      keyboard={false}
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

        {/* Editable fields with validation */}
        <Form.Item
          label="Customer GSTIN"
          validateStatus={customerError ? "error" : ""}
          help={customerError}
        >
          <Input
            value={localRecord.customerGstin}
            onChange={(e) => handleChange("customerGstin", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Supplier GSTIN"
          validateStatus={supplierError ? "error" : ""}
          help={supplierError}
        >
          <Input
            value={localRecord.supplierGstin}
            onChange={(e) => handleChange("supplierGstin", e.target.value)}
          />
        </Form.Item>

        <SaveButton
          type="primary"
          disabled={!!customerError || !!supplierError} //prop - disable ki conditions pass krne ke liyee
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
