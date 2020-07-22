import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';

@Component({
    selector: 'app-calendar-page',
    templateUrl: './calendar-page.component.html',
    styleUrls: ['./calendar-page.component.scss'],
})
export class CalendarPageComponent implements OnInit {
    @ViewChild('calendar') calendar: CalendarComponent;

    constructor() {}

    ngOnInit(): void {}
}
