import { EntityState } from "@ngrx/entity"
import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IgricaModel } from "../Interfaces/IgricaModel"


export const igrica_feature = createFeatureSelector<EntityState<IgricaModel>>("igrica_red")

export const igrica_selektor = createSelector(
    igrica_feature,
    (state) => {
        return state.ids
                .map(id => state.entities[id])
                .filter(igra => igra != null)
    }

)