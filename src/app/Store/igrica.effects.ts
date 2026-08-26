import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { IgricaService } from "../Services/igrica-service";
import * as IgriceActions from "./igrica.action"
import { map, mergeMap } from "rxjs";

@Injectable()
export class IgricaEffects
{
    constructor() {}

    private actions$ = inject(Actions)
    private service = inject(IgricaService)

    obs$ = createEffect( () => 
        this.actions$.pipe(
            ofType(IgriceActions.vrati_sve_igrice_akcija),
            mergeMap(() => this.service.vrati_sve_igrice().pipe(
                map((vraceno) => IgriceActions.vrati_sve_igrice_success({niz_igrica: vraceno}))
            )
        )
    ))
}