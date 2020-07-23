import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialogConfig } from '@angular/material/dialog/dialog-config';
import { CalendarDialogComponent } from '../dialogs/calendar-dialog/calendar-dialog.component';
import { CalendarEvent } from '../models/CalendarEvent';

@Injectable({
    providedIn: 'root',
})
export class DialogService {
    constructor(private dialog: MatDialog) {}

    public open<T>(
        componentOrTemplateRef: ComponentType<any> | TemplateRef<any>,
        config?: MatDialogConfig
    ): Observable<T> {
        return new Observable<any>((subscriber) => {
            const dialogRef = this.dialog.open(componentOrTemplateRef, config);

            dialogRef.afterClosed().subscribe((result) => {
                subscriber.next(result);
            });
        });
    }

    public openCalendarDialogComponent(
        data?: CalendarEvent,
        config?: MatDialogConfig<CalendarEvent>
    ): Observable<CalendarEvent> {
        let conf: MatDialogConfig<CalendarEvent> = config;
        if (!conf) {
            conf = {};
        }
        if (data) {
            conf.data = data;
        }
        return this.open(CalendarDialogComponent, conf);
    }
}
