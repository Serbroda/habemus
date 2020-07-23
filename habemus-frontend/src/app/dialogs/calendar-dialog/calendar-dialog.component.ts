import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarEvent } from '../../models/CalendarEvent';
import { DialogService } from '../../services/dialog.service';

@Component({
    selector: 'app-calendar-dialog',
    templateUrl: './calendar-dialog.component.html',
    styleUrls: ['./calendar-dialog.component.scss'],
})
export class CalendarDialogComponent implements OnInit {
    _data: CalendarEvent;

    constructor(
        public dialogRef: MatDialogRef<CalendarDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: CalendarEvent
    ) {
        this._data = data ? data : { title: '' };
    }

    ngOnInit(): void {}
}
