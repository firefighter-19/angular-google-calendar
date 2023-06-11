import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';

const routes = [
  {
    path: 'calendar',
    loadChildren: () =>
      import('./app/calendar/calendar.routes').then((m) => m.calendarRoutes),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()],
}).catch((err) => console.error(err));
