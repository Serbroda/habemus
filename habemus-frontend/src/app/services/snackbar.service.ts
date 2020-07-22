import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    constructor(private snackBar: MatSnackBar, private zone: NgZone) {}

    public open(message, action = 'Ok', duration = 5000) {
        this.zone.run(() => {
            this.snackBar.open(message, action, { duration });
        });
    }
}
