import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, formatDayString, FullCalendarComponent } from '@fullcalendar/angular';
import deLocale from '@fullcalendar/core/locales/de';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements AfterViewInit {
    @ViewChild('calendar') calendar: FullCalendarComponent;
    events: any[] = [
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
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        initialDate: formatDayString(new Date()),
        locale: deLocale,
        events: this.events,
        editable: true,
        headerToolbar: {
            right: 'prev,next',
            center: 'addEventButton',
        },
        weekNumbers: true,
        customButtons: {
            addEventButton: {
                text: 'Add',
                click: (element: HTMLElement) => {
                    alert('Clicked');
                },
            },
        },
    };

    constructor(private breakpointObserver: BreakpointObserver) {
        console.log(formatDayString(new Date()));
    }

    ngAfterViewInit() {
        this.breakpointObserver.observe(['(max-width: 769px)']).subscribe((state: BreakpointState) => {
            if (state.matches) {
                this.calendarOptions.initialView = 'listYear';
            } else {
                this.calendarOptions.initialView = 'dayGridMonth';
            }
            this.calendar.getApi().changeView(this.calendarOptions.initialView);
            setTimeout(() => this.calendar.getApi().updateSize(), 400);
        });
    }
}
