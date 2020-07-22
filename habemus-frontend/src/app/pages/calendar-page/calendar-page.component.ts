import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { formatDayString } from '@fullcalendar/angular';

@Component({
    selector: 'app-calendar-page',
    templateUrl: './calendar-page.component.html',
    styleUrls: ['./calendar-page.component.scss'],
})
export class CalendarPageComponent implements OnInit {
    @ViewChild('calendar') calendar: CalendarComponent;
    events = [
        { title: 'Kegeln', date: '2020-06-01' },
        {
            title: 'Kegeln',
            date: formatDayString(new Date()),
        },
        {
            title: 'Kegeln2',
            date: formatDayString(new Date()),
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
