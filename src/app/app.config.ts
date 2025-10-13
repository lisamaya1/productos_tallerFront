// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// ¡CRUCIAL! Asegúrate que esté importado y provisto
import { provideHttpClient } from '@angular/common/http'; 

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() // <--- ¡DEBE ESTAR AQUÍ!
  ]
};