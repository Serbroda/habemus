import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarEvent } from '../../models/CalendarEvent';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
// @ts-ignore
import { default as _rollupMoment } from 'moment';
import { FormControl } from '@angular/forms';
import { NGX_MAT_DATE_FORMATS, NgxMatDateAdapter } from '@angular-material-components/datetime-picker';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS, NgxMatMomentAdapter } from '@angular-material-components/moment-adapter';
import 'moment/locale/de';

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
    ],
})
export class CalendarDialogComponent implements OnInit {
    allDay = false;
    _data: CalendarEvent;

    constructor(
        public dialogRef: MatDialogRef<CalendarDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CalendarEvent
    ) {
        this._data = data ? data : { title: '' };
    }

    ngOnInit(): void {}
}
