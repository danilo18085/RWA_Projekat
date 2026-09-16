import { createAction, props } from "@ngrx/store";
import { ElementKorpaModel } from "../../Interfaces/ElementKorpaModel";


export const dodaj_u_korpu_akcija = createAction(
    "dodato je u korpu",
    props<{element : ElementKorpaModel}>()
)

export const izbaci_iz_korpe_akcija = createAction(
    "izbaci iz korpe",
    props<{element : ElementKorpaModel}>()
)

export const ocisti_korpu = createAction(
    "ocisti_korpu"
)