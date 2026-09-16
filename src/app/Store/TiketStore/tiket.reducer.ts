import { createEntityAdapter } from "@ngrx/entity"
import { Tiket } from "../../Interfaces/Tiket"
import { createReducer, on } from "@ngrx/store"
import { vrati_sve_tikete_success } from "./tiket.actions"


export const adapter_niz_tiketa = createEntityAdapter<Tiket>()
export const inicijalno_stanje_tiket = adapter_niz_tiketa.getInitialState({})


export const tiket_reducer = createReducer(
    inicijalno_stanje_tiket,
    on(vrati_sve_tikete_success, (state, {niz_tiketa}) => {
        return adapter_niz_tiketa.setAll(niz_tiketa, state)
    })
)