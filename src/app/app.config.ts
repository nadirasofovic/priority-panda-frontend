import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

<<<<<<< HEAD
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
=======
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {routes} from './app.routes';
>>>>>>> origin/main

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};
