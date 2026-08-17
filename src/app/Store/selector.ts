import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Pesma } from "../Interfaces/Pesma";

export interface PesmaPoruka {
    id_poslat: number | null,
    naziv_poslat: string | null,
    godina_poslata: number | null
}

export const pesma_feature = createFeatureSelector<Pesma>("pesma_red")

export const pesma_selector = createSelector(
    pesma_feature,
    (state : Pesma) : PesmaPoruka => {return {
        id_poslat: state.id,
        naziv_poslat: state.naziv,
        godina_poslata: state.godina
    }}
)
