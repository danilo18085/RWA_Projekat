import { createAction, props } from "@ngrx/store"
import { Tiket } from "../../Interfaces/Tiket"


export const vrati_sve_tikete = createAction(
    "VratiSveTikete"
)

export const vrati_sve_tikete_success = createAction(
    "TiketiVraceniSuccess",
    props<{niz_tiketa : Tiket[]}>()
)


export const izbrisi_tiket_akcija = createAction(
    "IzbrisiTiketAkcija",
    props<{id : number}>()
)