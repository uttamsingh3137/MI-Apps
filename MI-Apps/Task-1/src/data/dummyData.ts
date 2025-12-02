import type { InvoiceData } from "./InvoiceData";

export const dummyData: InvoiceData[] = [
  // ---- SALES DATA ----
  ...Array.from({ length: 25 }).map((_, i) => ({
    id: i + 1,
    type: "sales" as const,
    businessUnit: i % 2 === 0 ? "sales-bu1" : "sales-bu2",
    returnPeriod: ["2025-01", "2025-02", "2025-03"][i % 3],

    invoiceNo: `SAL-${String(i + 1).padStart(3, "0")}`,
    invoiceDate: `2025-0${(i % 3) + 1}-${String((i % 27) + 1).padStart(2, "0")}`,
    invoiceType: ["B2B", "B2C", "EXPORT"][i % 3],

    taxableValue: 1000 + i * 200,
    invoiceValue: 1180 + i * 200,

    supplierGstin: "33AAAAA1111A1Z1",
    customerGstin: i % 2 === 0 ? "29BBBBB2222B2Z2" : "NA",
    customerName: i % 2 === 0 ? "VK Enterprises" : "Walk-in Customer",
  })),

  // ---- PURCHASE DATA ----
  ...Array.from({ length: 25 }).map((_, i) => ({
    id: i + 26,
    type: "purchase" as const,
    businessUnit: i % 2 === 0 ? "purchase-bua" : "purchase-bub",
    returnPeriod: ["2025-01", "2025-02", "2025-03"][i % 3],

    invoiceNo: `PUR-${String(i + 1).padStart(3, "0")}`,
    invoiceDate: `2025-0${(i % 3) + 1}-${String((i % 27) + 1).padStart(2, "0")}`,
    invoiceType: ["CDNR", "DEBIT", "IMPORT"][i % 3],

    taxableValue: 1500 + i * 300,
    invoiceValue: 1500 + i * 300 + (i % 2 === 0 ? 540 : 270),

    supplierGstin: ["07CCCC3333C3Z3", "09DDDDD4444D4Z4", "NA"][i % 3],
    customerGstin: "33AAAAA1111A1Z1",
    customerName: "Our Company",
  })),
];
