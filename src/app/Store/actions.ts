import { createAction, props } from "@ngrx/store";
import { Pesma } from "../Interfaces/Pesma";


export const pesma_je_kliknuta_akcija = createAction(
    "[click] Pesma je kliknuta",
    props<{jedna_pesma : Pesma}>()
)


export const ucitaj_sve_pesme = createAction(
    "Ucitavamo sve pesme"
)

export const ucitaj_sve_pesme_succsess = createAction(
    "sve pesme ucitane",
    props<{vracene_pesme: Pesma[]}>()
)


