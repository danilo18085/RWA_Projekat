import { createAction, props } from "@ngrx/store";
import { Pesma } from "../Interfaces/Pesma";


export const pesma_je_kliknuta_akcija = createAction(
    "[click] Pesma je kliknuta",
    props<{jedna_pesma : Pesma}>()
)
