export interface CalendarEvent {
    id?: string;
    title: string;
    allDay?: boolean;
    date?: string;
    start?: Date;
    end?: Date;
    editable?: boolean;
    display?: 'auto' | 'block' | 'list-item' | 'background' | 'inverse-background' | 'none';
    backgroundColor?: string;
    textColor?: string;
    description?: string;
}
