import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input() mode: MatDrawerMode = 'side';
  @Input() hasShadow: boolean = false;
  @Output() menuClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log('hasShadow:', this.hasShadow);
  }

  onMenuClick() {
    this.menuClick.emit();
  }
}
