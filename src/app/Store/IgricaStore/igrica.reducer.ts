import { createEntityAdapter } from "@ngrx/entity"
import { IgricaModel } from "../../Interfaces/IgricaModel"
import { createReducer, on } from "@ngrx/store"
import { izbrisi_igru_akcija, vrati_sve_igrice_success } from "../IgricaStore/igrica.action"


export const adapter_niz_igrica = createEntityAdapter<IgricaModel>()
export const inicijalno_stanje_igrica = adapter_niz_igrica.getInitialState({})

export const igricaReducer = createReducer(
    inicijalno_stanje_igrica,
    on(vrati_sve_igrice_success, (state, {niz_igrica}) => {
        return adapter_niz_igrica.setAll(niz_igrica, state)
    }),
    on(izbrisi_igru_akcija, (state, { id }) => {
        return adapter_niz_igrica.removeOne(id, state)
    })
)