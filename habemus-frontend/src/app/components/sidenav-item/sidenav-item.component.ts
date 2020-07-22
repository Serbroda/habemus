import { Component, Input, OnInit } from '@angular/core';

export interface SidenavItem {
    route: string;
    title: string;
    icon: string;
}

@Component({
    selector: 'app-sidenav-item',
    templateUrl: './sidenav-item.component.html',
    styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent implements OnInit {
    @Input() public title: string;
    @Input() public route: string;
    @Input() public icon: string;
    @Input() public badge: string;

    constructor() {}

    ngOnInit() {}
}
