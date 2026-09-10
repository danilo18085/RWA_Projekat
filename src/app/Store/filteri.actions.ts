import { createAction, props } from "@ngrx/store";


export const setuj_search = createAction(
    'search_set',
    props<{input : string}>()
)

export const setuj_zanr = createAction(
    'zanr_set',
    props<{input : string[]}>()
)

export const setuj_cenu = createAction(
    'cena_set',
    props<{input: number}>()
)

export const prazna_akcija = createAction(
    'prazna_akcija'
)