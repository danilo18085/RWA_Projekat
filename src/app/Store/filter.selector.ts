import { createFeatureSelector, createSelector } from "@ngrx/store"
import { Filter } from "../Interfaces/Filter"

export const search_feature = createFeatureSelector<Filter>("filteri_red")


export const search_selector = createSelector(
    search_feature,
    state => {return state.search}
)

export const zanr_selector = createSelector(
    search_feature,
    state => {return state.zanr}
)

export const cena_selector = createSelector(
    search_feature,
    state =>  {return state.max_cena}
)