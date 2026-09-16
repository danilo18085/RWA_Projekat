import { createAction, props } from "@ngrx/store";
import { IgricaModel } from "../../Interfaces/IgricaModel";

export const vrati_sve_igrice_akcija = createAction(
    "VratiSveIgrice"
)

export const vrati_sve_igrice_success = createAction(
    "IgriceVraceneSuccess",
    props<{niz_igrica : IgricaModel[]}>()
)