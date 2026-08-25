import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, delay, map, mergeMap, Observable, of } from "rxjs";
import { NotifikacijaActions } from "./notifikacija.actions";

let brojac : number = 0;

@Injectable()
export class NotifikacijaEffects {
    
  constructor() {}

  private actions$ = inject(Actions)

  prikaziRedom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotifikacijaActions.posalji),
      concatMap(({ notifikacija }) =>
        of({ ...notifikacija, id: brojac++ }).pipe(delay(2000))
      ),
      map(notifikacija => NotifikacijaActions.prikazi({ notifikacija }))
    )
  )


  ukloniPoslePrikaza$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NotifikacijaActions.prikazi),
      mergeMap(({ notifikacija }) =>
        of(notifikacija.id).pipe(delay(notifikacija.trajanje))
      ),
      map(id => NotifikacijaActions.ukloni({ id }))
    )
  );
}