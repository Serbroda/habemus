import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    @ViewChild('sidenav') sidenav: MatSidenav;
    title = 'habemus-frontend';
    mode: MatDrawerMode = 'side';
    opened = true;

    constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
        this.breakpointObserver.observe(['(max-width: 769px)']).subscribe((state: BreakpointState) => {
            if (state.matches) {
                this.mode = 'over';
                this.opened = false;
            } else {
                this.mode = 'side';
                this.opened = true;
            }
        });
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                if (this.mode === 'over') {
                    this.sidenav.close();
                }
            }
        });
    }

    onOpenChange(val: any) {
        this.opened = val;
    }
}
