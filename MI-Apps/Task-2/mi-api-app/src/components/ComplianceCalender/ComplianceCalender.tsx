import { Row, Col, Card } from "antd";
import { useState, useMemo } from "react";
import { addMonths, subMonths, isSameMonth } from "date-fns";
import type {
  CalendarEvent,
  ReminderItem,
} from "../../Constants/CalendarData/calender.interface";
import { CalendarHeader } from "./CalendarHeader/CalenderHeader";
import { CalendarGrid } from "./CalenderGrid/CalenderGrid";
import { ReminderList } from "../ReminderCard/ReminderList/ReminderList";
import { EventDetailsModal } from "../EventDetailsModal/EventDetailsModal";
import { MOCK_EVENTS } from "../../Constants/CalendarData/MOCK_EVENTS";



const convertEventsToReminders = (events: CalendarEvent[]): ReminderItem[] => {
  return events.map((ev) => ({
    id: ev.id,
    title: ev.title,
    subtitle: "Compliance Reminder",
    description: `Scheduled for ${ev.date}`,
    dueIn: "",
    priority: "Low",
  }));
};

export const ComplianceCalendar = () => {
  const [month, setMonth] = useState(new Date(2025, 11, 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );

  const handleEventClick = (ev: CalendarEvent) => {
    setSelectedEvent(ev);
    setEventModalOpen(true);
  };

  const eventsForMonth = useMemo(
    () => MOCK_EVENTS.filter((ev) => isSameMonth(new Date(ev.date), month)),
    [month]
  );

  const remindersForMonth = useMemo(
    () => convertEventsToReminders(eventsForMonth),
    [eventsForMonth]
  );

  return (
    <Row gutter={24}>
      <Col span={6}>
        <ReminderList reminders={remindersForMonth} />
      </Col>

      <Col span={18}>
        <Card style={{ borderRadius: 12, padding: 16 }}>
          <CalendarHeader
            month={month}
            onPrev={() => setMonth(subMonths(month, 1))}
            onNext={() => setMonth(addMonths(month, 1))}
            onRefresh={() => console.log("Refresh clicked")}
          />

          <CalendarGrid
            month={month}
            events={eventsForMonth}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            onEventClick={handleEventClick}
          />

          <EventDetailsModal

            open={eventModalOpen}
            onClose={() => setEventModalOpen(false)}
            event={selectedEvent}
          />
        </Card>
      </Col>
    </Row>
  );
};
