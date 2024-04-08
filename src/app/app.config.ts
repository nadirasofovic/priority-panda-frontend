import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

<<<<<<< HEAD
import { routes } from './app.routes';
<<<<<<< HEAD
import { provideClientHydration } from '@angular/platform-browser';
=======
<<<<<<< HEAD
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
=======
>>>>>>> origin/main

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideRouter(routes)]
>>>>>>> origin/main
=======
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {routes} from './app.routes';
>>>>>>> origin/main

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
>>>>>>> origin/main
=======
  providers: [provideRouter(routes), provideClientHydration()]
>>>>>>> ed1e1901a44e0d5fbb1b87673a1930310cac6ef4
};
