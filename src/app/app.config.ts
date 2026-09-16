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
import { IgricaEffects } from './Store/igrica.effects';
import { igricaReducer } from './Store/igrica.reducer';
import { FilteriEffects } from './Store/filteri.effects';
import { filter_reducer_funkcija } from './Store/filteri.reducer';
import { korpa_reducer } from './Store/korpa.reducer';
import { tiket_reducer } from './Store/TiketStore/tiket.reducer';
import { TiketEffects } from './Store/TiketStore/tiket.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({pesma_red: pesma_reducer_funkcija, 
                  vracene_pesme: niz_pesama_za_prikaz,
                  notifikacija_red: notifikacijaReducer,
                  igrica_red: igricaReducer,
                  filteri_red: filter_reducer_funkcija,
                  korpa_red: korpa_reducer,
                  tiket_red: tiket_reducer
                }),
    provideHttpClient(),
    provideEffects(PesmeEffects, NotifikacijaEffects, IgricaEffects, FilteriEffects, TiketEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,       
      trace: false,          
      traceLimit: 75
    })
  ]
};
