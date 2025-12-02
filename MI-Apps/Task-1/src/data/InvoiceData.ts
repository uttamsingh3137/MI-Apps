export interface InvoiceData {
  id: number;
  invoiceNo: string;
  invoiceDate: string;
  invoiceType: string;
  taxableValue: number;
  invoiceValue: number;
  supplierGstin: string;
  customerGstin: string;
  customerName: string;
}
