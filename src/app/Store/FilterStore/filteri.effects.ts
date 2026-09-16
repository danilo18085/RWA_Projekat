import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest, debounceTime, distinctUntilChanged, filter, map, skip, startWith, switchMap, tap } from "rxjs";
import { cena_selector, search_selector, zanr_selector } from "./filter.selector";
import { Filter } from "../../Interfaces/Filter";
import { createEffect } from "@ngrx/effects";
import { IgricaService } from "../../Services/igrica/igrica-service";
import * as IgricaAkcija from "../IgricaStore/igrica.action"

@Injectable()
export class FilteriEffects
{
    private store : Store = inject(Store)
    private igrica_service : IgricaService = inject(IgricaService)
    
    private search$ = this.store.select(search_selector).pipe(
        map((str) => str.trim()),
        filter((rec : string) => rec.length >= 2 || rec.length === 0),
        debounceTime(700),
        distinctUntilChanged(),
        startWith('')
    )
    
    private checkbox$ = this.store.select(zanr_selector).pipe(
      distinctUntilChanged()
    )
    
    private slider$ = this.store.select(cena_selector).pipe(
        map((val) => Number(val)),
        debounceTime(150),
        distinctUntilChanged()
    )
    
    private filters$ = combineLatest([this.search$, this.checkbox$, this.slider$]).pipe(
      map(([search, checked, maxCena]): Filter => ({ search, zanr: checked, max_cena: maxCena }))
    ).pipe(
      skip(2)  
    )
    

    refreshGames$ = createEffect(() => this.filters$.pipe(
        switchMap(filter => this.igrica_service.vrati_igre_po_filteru(filter).pipe(
            map((rez) => IgricaAkcija.vrati_sve_igrice_success({niz_igrica: rez}))
        )
      )
    ))
}

