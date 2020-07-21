import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
    @Input() size = -1;
    @Input() borderWidth = 0;
    @Input() borderColor = 'lightgray';

    constructor() {}

    ngOnInit(): void {}
}
