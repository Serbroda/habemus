import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
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
    @Input() events: any[] = [];
    @Input() viewType = 'dayGridMonth';

    calendarOptions: CalendarOptions = {
        initialView: this.viewType,
        initialDate: formatDayString(new Date()),
        locale: deLocale,
        events: this.events,
        editable: true,
        headerToolbar: {
            right: '',
            center: '',
        },
        customButtons: {
            addEventButton: {
                text: 'Add',
                click: (element: HTMLElement) => {
                    alert('Clicked');
                },
            },
        },
    };

    constructor(private breakpointObserver: BreakpointObserver) {}

    ngAfterViewInit() {
        this.calendarOptions.events = this.events;
        if (this.calendarOptions.initialView !== this.viewType) {
            this.calendarOptions.initialView = this.viewType;
            this.calendar.getApi().changeView(this.calendarOptions.initialView);
        }
        /*this.breakpointObserver.observe(['(max-width: 769px)']).subscribe((state: BreakpointState) => {
            if (state.matches) {
                this.calendarOptions.initialView = 'listYear';
            } else {
                this.calendarOptions.initialView = 'dayGridMonth';
            }
            this.calendar.getApi().changeView(this.calendarOptions.initialView);
            setTimeout(() => this.calendar.getApi().updateSize(), 400);
        });*/
    }
}
