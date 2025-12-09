import type { CalendarEvent } from "./calender.interface";

export interface Props {
  month: Date;
  events: CalendarEvent[];
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  onEventClick: (event: CalendarEvent) => void;
  onMonthChange: (month: Date) => void;
}