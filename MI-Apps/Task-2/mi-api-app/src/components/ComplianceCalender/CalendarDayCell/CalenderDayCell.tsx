import { Tooltip } from "antd";
import { isSameDay } from "date-fns";
import {
  DayCellWrapper,
  DayNumber,
  EventTag,
  EventScrollArea,
} from "../../../Styled/Calendar.styled";
import type { Props } from "../../../Constants/CalendarData/CalendarDayCell";




export const CalendarDayCell: React.FC<Props> = ({
  date,
  events,
  isCurrentMonth,
  selectedDate,
  onSelect,
  onEventClick,
}) => {
  return (
    <DayCellWrapper
      faded={!isCurrentMonth}
      selected={selectedDate ? isSameDay(date, selectedDate) : false}
      onClick={onSelect}
    >
      <DayNumber>{date.getDate()}</DayNumber>

      <EventScrollArea>
        {events.map((ev) => (
          <Tooltip title={ev.title} key={ev.id}>
            <EventTag
              onClick={(e) => {
                e.stopPropagation(); 
                onEventClick(ev);
              }}
            >
              {ev.title}
            </EventTag>
          </Tooltip>
        ))}
      </EventScrollArea>
    </DayCellWrapper>
  );
};
