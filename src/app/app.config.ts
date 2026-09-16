import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { notifikacijaReducer } from './Store/NotifikacijaStore/notifikacija.reducer';
import { NotifikacijaEffects } from './Store/NotifikacijaStore/notifikacija.effects';
import { IgricaEffects } from './Store/IgricaStore/igrica.effects';
import { igricaReducer } from './Store/IgricaStore/igrica.reducer';
import { FilteriEffects } from './Store/FilterStore/filteri.effects';
import { filter_reducer_funkcija } from './Store/FilterStore/filteri.reducer';
import { korpa_reducer } from './Store/KorpaStore/korpa.reducer';
import { tiket_reducer } from './Store/TiketStore/tiket.reducer';
import { TiketEffects } from './Store/TiketStore/tiket.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
                  notifikacija_red: notifikacijaReducer,
                  igrica_red: igricaReducer,
                  filteri_red: filter_reducer_funkcija,
                  korpa_red: korpa_reducer,
                  tiket_red: tiket_reducer
                }),
    provideHttpClient(),
    provideEffects(NotifikacijaEffects, IgricaEffects, FilteriEffects, TiketEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,       
      trace: false,          
      traceLimit: 75
    })
  ]
};
