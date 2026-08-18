import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { niz_pesama_za_prikaz, pesma_reducer_funkcija } from './Store/reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { PesmeEffects } from './Store/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({pesma_red: pesma_reducer_funkcija, vracene_pesme: niz_pesama_za_prikaz}),
    provideHttpClient(),
    provideEffects(PesmeEffects)
  ]
};
