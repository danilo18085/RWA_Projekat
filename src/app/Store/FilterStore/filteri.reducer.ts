import { createReducer, on } from "@ngrx/store"
import { setuj_cenu, setuj_search, setuj_zanr } from "./filteri.actions"
import { Filter } from "../../Interfaces/Filter"

export const filter_stanje : Filter = 
{
    search: "",
    zanr: [],
    max_cena: 100
}

export const filter_reducer_funkcija = createReducer(
    filter_stanje,
    on(setuj_search, (state, {input}) => ({
        ...state,
        search: input
    })),
    on(setuj_zanr, (state, {input}) => ({
        ...state,
        zanr: input
    })),
    on(setuj_cenu, (state, {input}) => ({
        ...state,
        max_cena: input
    })
    )
)

