import { isSameMonth } from "date-fns";
import { getCalendarDays } from "../../../Constants/Utility/Calender.utils";
import { GridWrapper } from "../../../Styled/Calendar.styled";
import { CalendarDayCell } from "../CalendarDayCell/CalenderDayCell";
import type { Props } from "../../../Constants/CalendarData/CalendarGrid.interface";



export const CalendarGrid: React.FC<Props> = ({
  month,
  events,
  selectedDate,
  onSelectDate,
  onEventClick
}) => {
  const days = getCalendarDays(month);

  return (
    <GridWrapper>
      {days.map((day) => {
        const dayEvents = events.filter(
          (e) => new Date(e.date).toDateString() === day.toDateString()
        );

        return (
          <CalendarDayCell
            key={day.toISOString()}
            date={day}
            events={dayEvents}
            isCurrentMonth={isSameMonth(day, month)}
            selectedDate={selectedDate}
            onSelect={() => onSelectDate(day)}
            onEventClick={onEventClick}
          />
        );
      })}
    </GridWrapper>
  );
};
