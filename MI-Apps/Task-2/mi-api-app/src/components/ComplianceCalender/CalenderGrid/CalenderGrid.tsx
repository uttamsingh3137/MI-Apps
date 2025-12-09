import { isSameMonth, addMonths, subMonths } from "date-fns";
import { getCalendarDays } from "../../../Constants/Utility/Calender.utils";
import { GridWrapper } from "../../../Styled/Calendar.styled";
import { CalendarDayCell } from "../CalendarDayCell/CalenderDayCell";
import type { Props } from "../../../Constants/CalendarData/CalendarGrid.interface";

export const CalendarGrid: React.FC<Props> = ({
  month,
  events,
  selectedDate,
  onSelectDate,
  onEventClick,
  onMonthChange,   
}) => {
  const days = getCalendarDays(month);

  return (
    <GridWrapper>
      {days.map((day) => {
        const dayEvents = events.filter(
          (e) => new Date(e.date).toDateString() === day.toDateString()
        );

        const currentMonthIndex = month.getMonth();
        const dayMonthIndex = day.getMonth();

        
        const isPrevMonth =
          (dayMonthIndex === currentMonthIndex - 1) ||
          (currentMonthIndex === 0 && dayMonthIndex === 11);

        
        const isNextMonth =
          (dayMonthIndex === currentMonthIndex + 1) ||
          (currentMonthIndex === 11 && dayMonthIndex === 0);

        return (
          <CalendarDayCell
            key={day.toISOString()}
            date={day}
            events={dayEvents}
            isCurrentMonth={isSameMonth(day, month)}
            selectedDate={selectedDate}
            onSelect={() => {
              if (isPrevMonth) {
                onSelectDate(day);
                onMonthChange(subMonths(month, 1));
                return;
              }

              if (isNextMonth) {
                onSelectDate(day);
                onMonthChange(addMonths(month, 1));
                return;
              }

             
              onSelectDate(day);
            }}
            onEventClick={onEventClick}
            onMonthChange={onMonthChange} 
          />
        );
      })}
    </GridWrapper>
  );
};
