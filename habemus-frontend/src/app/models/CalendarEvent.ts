import { EventApi } from '@fullcalendar/core/main';
import { from } from 'rxjs';

export interface CalendarEvent {
    id?: string;
    title: string;
    allDay?: boolean;
    start?: Date;
    end?: Date;
    editable?: boolean;
    // display?: 'auto' | 'block' | 'list-item' | 'background' | 'inverse-background' | 'none';
    display?: string;
    backgroundColor?: string;
    textColor?: string;
    description?: string;
}

export const fromEventApi = (eventApi: EventApi): CalendarEvent => {
    return {
        id: eventApi.id,
        title: eventApi.title,
        allDay: eventApi.allDay,
        start: eventApi.start ? new Date(eventApi.start.getTime()) : undefined,
        end: eventApi.end ? new Date(eventApi.start.getTime()) : undefined,
        display: eventApi.display,
        backgroundColor: eventApi.backgroundColor,
        textColor: eventApi.textColor,
    };
};
