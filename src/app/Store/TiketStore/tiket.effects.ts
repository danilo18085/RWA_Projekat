import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TiketService } from "../../Services/tiket/tiket-service";
import * as TiketActions from "./tiket.actions"
import { map, mergeMap } from "rxjs";


@Injectable()
export class TiketEffects
{
    private actions$ = inject(Actions)
    private tiket_service = inject(TiketService)

    obs$ = createEffect( () => 
        this.actions$.pipe(
            ofType(TiketActions.vrati_sve_tikete),
            mergeMap(() => this.tiket_service.vrati_tikete().pipe(
                map((res) => TiketActions.vrati_sve_tikete_success({niz_tiketa: res}))
            ))
        )
    )
}