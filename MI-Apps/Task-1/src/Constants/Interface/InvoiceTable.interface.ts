import type { InvoiceData } from "../../data/InvoiceData";

export interface InvoiceTableProps {
  data: InvoiceData[];
  onDelete: (record: InvoiceData) => void;
  onView: (record: InvoiceData) => void;
  onEdit: (record: InvoiceData) => void;
}