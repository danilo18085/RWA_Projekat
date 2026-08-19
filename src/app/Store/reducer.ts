import { createReducer, on } from "@ngrx/store";
import { Pesma } from "../Interfaces/Pesma";
import { createEntityAdapter, EntityState } from "@ngrx/entity"
import { pesma_je_kliknuta_akcija, ucitaj_sve_pesme_succsess } from "./actions";


export const selekcija_stanje : Pesma = 
{
    id: null,
    naziv: null,
    godina: null
}

export const pesma_reducer_funkcija = createReducer(
    selekcija_stanje,
    on(pesma_je_kliknuta_akcija, (state, {jedna_pesma}) => (
        {
            ...state,
            id: jedna_pesma.id,
            naziv: jedna_pesma.naziv,
            godina: jedna_pesma.godina
        }
    ))
)

//---------------------------------------------------------------------------
export interface niz_pesama_stanje extends EntityState<Pesma> {}
const adapter_niz_pesama = createEntityAdapter<Pesma>()
export const niz_pesama_inicijalno = adapter_niz_pesama.getInitialState({}) 

export const niz_pesama_za_prikaz = createReducer(
    niz_pesama_inicijalno,
    on(ucitaj_sve_pesme_succsess, (state, {vracene_pesme}) => {
        return adapter_niz_pesama.setAll(vracene_pesme, state)
    })
)