import { EntityState } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Notifikacija } from "../../Interfaces/Notifikacija";

export const notifikacija_feature = createFeatureSelector<EntityState<Notifikacija>>("notifikacija_red")

export const notifikacija_selektor = createSelector(
    notifikacija_feature,
    (state) => {
        return state.ids
                .map(id => state.entities[id])
                .filter(notifikacija => notifikacija != null)
    }
)