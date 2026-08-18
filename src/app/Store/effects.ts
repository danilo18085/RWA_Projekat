
import { inject, Injectable } from '@angular/core';
import * as PesmeActions from './actions'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Nekiservis } from '../services/nekiservis';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class PesmeEffects 
{
    constructor() {}

    private actions$ = inject(Actions);
    private service = inject(Nekiservis);

    obs$ = createEffect( () => 
        this.actions$.pipe(
            ofType(PesmeActions.ucitaj_sve_pesme),
            mergeMap(() => this.service.getSvePesme().pipe(
                map((vraceno) => PesmeActions.ucitaj_sve_pesme_succsess({vracene_pesme: vraceno}))
            )
        )
    ))
}