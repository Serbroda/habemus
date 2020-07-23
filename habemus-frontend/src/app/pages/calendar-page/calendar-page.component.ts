import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { CalendarEvent } from '../../models/CalendarEvent';

@Component({
    selector: 'app-calendar-page',
    templateUrl: './calendar-page.component.html',
    styleUrls: ['./calendar-page.component.scss'],
})
export class CalendarPageComponent implements OnInit {
    @ViewChild('calendar') calendar: CalendarComponent;
    events: CalendarEvent[] = [
        {
            title: 'Kegeln',
            start: new Date(),
            allDay: true,
        },
        {
            title: 'Kegeln2',
            start: new Date(),
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
