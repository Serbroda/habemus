import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { NavComponent } from './components/nav/nav.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { SidenavItemComponent } from './components/sidenav-item/sidenav-item.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarDialogComponent } from './dialogs/calendar-dialog/calendar-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';

FullCalendarModule.registerPlugins([
    // register FullCalendar plugins
    dayGridPlugin,
    listPlugin,
]);

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CalendarPageComponent,
        NavComponent,
        AvatarComponent,
        SidenavItemComponent,
        CalendarComponent,
        CalendarDialogComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatExpansionModule,
        MatBadgeModule,
        MatSnackBarModule,
        FullCalendarModule,
        MatInputModule,
        MatDialogModule,
        MatCheckboxModule,
        FormsModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        MatDatepickerModule,
        NgxMatMomentModule,
        ReactiveFormsModule,
        MatNativeDateModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
