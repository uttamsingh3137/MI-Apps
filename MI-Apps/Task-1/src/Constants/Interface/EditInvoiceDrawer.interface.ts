import type { InvoiceData } from "../../data/InvoiceData";

export interface EditInvoiceDrawerProps {
  open: boolean;
  record: InvoiceData | null;
  onClose: () => void;
  onSave: (updated: InvoiceData) => void;
}
