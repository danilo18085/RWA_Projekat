import { createReducer, on } from "@ngrx/store";
import { Pesma } from "../Interfaces/Pesma";
import { pesma_je_kliknuta_akcija, ucitaj_sve_pesme_succsess } from "./actions";


export const selekcija_stanje : Pesma = 
{
    id: null,
    naziv: null,
    godina: null
}

export const niz_pesama_stanje : Pesma[] = []

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

export const niz_pesama_za_prikaz = createReducer(
    niz_pesama_stanje,
    on(ucitaj_sve_pesme_succsess, (state, {vracene_pesme}) => vracene_pesme)
)