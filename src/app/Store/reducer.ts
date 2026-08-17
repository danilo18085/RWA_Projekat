import { createReducer, on } from "@ngrx/store";
import { Pesma } from "../Interfaces/Pesma";
import { pesma_je_kliknuta_akcija } from "./actions";


export const inicijalno_stanje : Pesma = 
{
    id: null,
    naziv: null,
    godina: null
}

export const pesma_reducer_funkcija = createReducer(
    inicijalno_stanje,
    on(pesma_je_kliknuta_akcija, (state, {jedna_pesma}) => (
        {
            ...state,
            id: jedna_pesma.id,
            naziv: jedna_pesma.naziv,
            godina: jedna_pesma.godina
        }
    ))
)