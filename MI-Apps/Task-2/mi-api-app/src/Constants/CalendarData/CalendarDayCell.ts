import type { CalendarEvent } from "../CalendarData/calender.interface";

export interface Props {
  date: Date;
  events: CalendarEvent[];
  isCurrentMonth: boolean;
  selectedDate: Date | null;
  onSelect: () => void;
  onEventClick: (event: CalendarEvent) => void;
}