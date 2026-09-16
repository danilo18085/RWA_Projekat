import { EntityState } from "@ngrx/entity";
import { Tiket } from "../../Interfaces/Tiket";
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const tiket_feature = createFeatureSelector<EntityState<Tiket>>("tiket_red")

export const tiket_selector = createSelector(
    tiket_feature,
    (state) => {
        return state.ids
                .map(id => state.entities[id])
                .filter(tiket => tiket != null)
    }
)