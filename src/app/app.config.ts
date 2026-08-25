import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { niz_pesama_za_prikaz, pesma_reducer_funkcija } from './Store/reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { PesmeEffects } from './Store/effects';
import { notifikacijaReducer } from './Store/notifikacija.reducer';
import { NotifikacijaEffects } from './Store/notifikacija.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({pesma_red: pesma_reducer_funkcija, 
                  vracene_pesme: niz_pesama_za_prikaz,
                  notifikacija_red: notifikacijaReducer,
                }),
    provideHttpClient(),
    provideEffects(PesmeEffects, NotifikacijaEffects),
    provideStoreDevtools({
      maxAge: 25,           // koliko akcija (istorije) da čuva u memoriji
      logOnly: !isDevMode(), // automatski isključi u produkciji
      autoPause: true,       // pauzira snimanje kad DevTools panel nije otvoren (bolje performanse)
      trace: false,          // true = beleži stack trace za svaku akciju (korisno za debug, ali sporije)
      traceLimit: 75
    })
  ]
};
