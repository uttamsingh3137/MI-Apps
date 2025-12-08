import { eachDayOfInterval, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";

export const getCalendarDays = (month : Date) =>{
    const start = startOfWeek(startOfMonth(month), {weekStartsOn : 0});
    const end = endOfWeek(endOfMonth(month) , {weekStartsOn : 0});

    return eachDayOfInterval({start,end});
};