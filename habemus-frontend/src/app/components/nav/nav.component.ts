import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    @Input() mode: MatDrawerMode = 'side';
    @Input() opened;
    @Input() hasShadow = false;
    @Input() showAlwaysMenuButton = false;
    @Output() menuClick = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onMenuClick() {
        this.menuClick.emit();
    }
}
