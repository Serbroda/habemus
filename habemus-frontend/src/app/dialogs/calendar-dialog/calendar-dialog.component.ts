import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CalendarEvent } from '../../models/CalendarEvent';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// @ts-ignore
import * as _moment from 'moment';
// @ts-ignore
import { default as _rollupMoment } from 'moment';
import { NGX_MAT_DATE_FORMATS, NgxMatDateAdapter } from '@angular-material-components/datetime-picker';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS, NgxMatMomentAdapter } from '@angular-material-components/moment-adapter';
import 'moment/locale/de';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';

const moment = _rollupMoment || _moment;
moment.locale('de');

export const MY_FORMATS = {
    parse: {
        dateInput: 'l, LT',
    },
    display: {
        dateInput: 'l, LT', // label
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

export const MY_DATE_FORMATS = {
    parse: {
        dateInput: 'l',
    },
    display: {
        dateInput: 'l', // label
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@Component({
    selector: 'app-calendar-dialog',
    templateUrl: './calendar-dialog.component.html',
    styleUrls: ['./calendar-dialog.component.scss'],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
        {
            provide: NgxMatDateAdapter,
            useClass: NgxMatMomentAdapter,
            deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },
        {
            provide: NGX_MAT_DATE_FORMATS,
            useValue: MY_FORMATS,
        },
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
        },

        { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    ],
})
export class CalendarDialogComponent implements OnInit {
    _data: CalendarEvent;
    mode: 'new' | 'edit';
    repeat = false;
    repeating = 'days';
    repeatCount = 1;

    constructor(
        public dialogRef: MatDialogRef<CalendarDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CalendarEvent
    ) {
        this.mode = data ? 'edit' : 'new';
        this._data = data ? data : { title: '', allDay: true };
    }

    ngOnInit(): void {}

    private createZeroTimeDate(base?: Date): Date {
        const d = base ? base : new Date();
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);
        return d;
    }
}
