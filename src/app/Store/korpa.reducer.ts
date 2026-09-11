import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { ElementKorpaModel } from "../Interfaces/ElementKorpaModel";
import { createReducer, on } from "@ngrx/store";
import { dodaj_u_korpu_akcija, izbaci_iz_korpe_akcija } from "./korpa.actions";

export interface KorpaState extends EntityState<ElementKorpaModel> {
    ukupnaCena : number
}

export const adapter_niz_elemenata = createEntityAdapter<ElementKorpaModel>()

export const inicijalno_stanje_korpe : KorpaState = adapter_niz_elemenata.getInitialState({
    ukupnaCena: 0.00
})

export const korpa_reducer = createReducer(
    inicijalno_stanje_korpe,
    on(dodaj_u_korpu_akcija, (state, {element}) => {
        const novi_niz = adapter_niz_elemenata.addOne(element, state)
        return {
            ...novi_niz,
            ukupnaCena : state.ukupnaCena + element.cena
        }
    }),
    on(izbaci_iz_korpe_akcija, (state, {element}) => {
        const novi_niz = adapter_niz_elemenata.removeOne(element.id, state)
        return {
            ...novi_niz,
            ukupnaCena : state.ukupnaCena - element.cena
        }
    })
)


