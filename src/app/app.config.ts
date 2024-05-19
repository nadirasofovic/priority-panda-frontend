import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

<<<<<<< HEAD
import { routes } from './app.routes';
<<<<<<< HEAD
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
=======

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
>>>>>>> origin/main
=======
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {routes} from './app.routes';
>>>>>>> origin/main

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
>>>>>>> origin/main
};
