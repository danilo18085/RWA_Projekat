import { createFeatureSelector, createSelector } from "@ngrx/store";
import { KorpaState } from "./korpa.reducer";

export const korpa_feature = createFeatureSelector<KorpaState>("korpa_red")

export const selectUkupnaCena = createSelector(
  korpa_feature,
  state => {
    return state.ukupnaCena
  }
)

export const selectSveElementeKorpe = createSelector(
    korpa_feature,
    state => {
        return state.ids
            .map(id => state.entities[id])
            .filter(elem => elem != null)
    }
) 