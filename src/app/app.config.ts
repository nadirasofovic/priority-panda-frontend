import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//export const appConfig: ApplicationConfig = {
  //providers: [provideRouter(routes)],
  //import {provideAnimationsAsync: provideAnimationsAsync} from '@angular/platform-browser/animations/async';
  //providers: [provideRouter(routes), provideAnimationsAsync()],
  //providers: [provideRouter(routes), provideClientHydration()],
//};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideClientHydration()
  ]
};

