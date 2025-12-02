export interface InvoiceData {
  id: number;
  type: "sales" | "purchase";
  businessUnit: string;
  returnPeriod: string;

  invoiceNo: string;
  invoiceDate: string;
  invoiceType: string;

  taxableValue: number;
  invoiceValue: number;

  supplierGstin: string;
  customerGstin: string;
  customerName: string;
}
