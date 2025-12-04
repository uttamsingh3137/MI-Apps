import { Drawer, Descriptions } from "antd";
import { StyledDescriptions } from "../Styled/InvoiceViewDrawer.styled";
import type { InvoiceViewDrawerProps } from "../Constants/Interface/InvoiceViewDrawer.interface";





const InvoiceViewDrawer = ({ open, data, onClose }: InvoiceViewDrawerProps) => {
  return (
    <Drawer
      title={data ? `Invoice Details – ${data.invoiceNo}` : "Invoice Details"}
      open={open}
      size={480} //************** */
      onClose={onClose}
      // destroyOnClose - never use
    >
      {data && (
        <StyledDescriptions size="small" column={1} bordered>
          <Descriptions.Item label="Invoice No">{data.invoiceNo}</Descriptions.Item>

          <Descriptions.Item label="Invoice Date">{data.invoiceDate}</Descriptions.Item>

          <Descriptions.Item label="Invoice Type">{data.invoiceType}</Descriptions.Item>

          <Descriptions.Item label="Customer Name">{data.customerName}</Descriptions.Item>

          <Descriptions.Item label="Customer GSTIN">{data.customerGstin}</Descriptions.Item>

          <Descriptions.Item label="Supplier GSTIN">{data.supplierGstin}</Descriptions.Item>

          <Descriptions.Item label="Taxable Value">{data.taxableValue}</Descriptions.Item>

          <Descriptions.Item label="Invoice Value">{data.invoiceValue}</Descriptions.Item>
        </StyledDescriptions>
      )}
    </Drawer>
  );
};

export default InvoiceViewDrawer;
