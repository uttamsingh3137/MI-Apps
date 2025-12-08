export interface ReminderItem{
    id : number;
    title : string;
    subtitle? : string;
    description? : string;
    period? : string;
    dueIn? : string;
    priority? : "Low" | "Medium" | "High";
}

export interface CalendarEvent{
    id : number;
    date: string;
    title : string;
}