import type { InvoiceData } from "../../data/InvoiceData";


export interface InvoiceViewDrawerProps {
  open: boolean;
  data: InvoiceData | null;
  onClose: () => void;
}