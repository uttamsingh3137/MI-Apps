import type { ReminderItem } from "./ReminderItem";


export interface Props {
  open: boolean;
  onClose: () => void;
  event: ReminderItem | null;
}