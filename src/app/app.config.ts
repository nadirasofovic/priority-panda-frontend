import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

<<<<<<< HEAD
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideRouter(routes)]
=======
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
>>>>>>> origin/main
=======
  providers: [provideRouter(routes), provideClientHydration()]
>>>>>>> ed1e1901a44e0d5fbb1b87673a1930310cac6ef4
};
