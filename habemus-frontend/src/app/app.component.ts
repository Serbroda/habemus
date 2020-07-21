import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'habemus-frontend';
    mode: MatDrawerMode = 'side';
    opened = true;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver.observe(['(max-width: 769px)']).subscribe((state: BreakpointState) => {
            if (state.matches) {
                this.mode = 'over';
                this.opened = false;
            } else {
                this.mode = 'side';
                this.opened = true;
            }
        });
    }
}
