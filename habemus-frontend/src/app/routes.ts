import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'calendar',
        component: CalendarComponent,
    },
];
