import { createEntityAdapter } from "@ngrx/entity";
import { Notifikacija } from "../Interfaces/Notifikacija";
import { createReducer, on } from "@ngrx/store";
import { NotifikacijaActions } from "./notifikacija.actions";


export const adapter_niz_notifikacija = createEntityAdapter<Notifikacija>()
export const inicijalno_stanje_notifikacija = adapter_niz_notifikacija.getInitialState({})

export const notifikacijaReducer = createReducer(
    inicijalno_stanje_notifikacija,
    on(NotifikacijaActions.prikazi_notifikaciju, (state, {notifikacija}) => {
        return adapter_niz_notifikacija.addOne(notifikacija, state)
    }),
    on(NotifikacijaActions.ukloni_notifikaciju, (state, {id}) => {
        return adapter_niz_notifikacija.removeOne(id, state)
    })
)