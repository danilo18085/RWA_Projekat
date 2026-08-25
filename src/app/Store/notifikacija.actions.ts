import { createActionGroup, props } from "@ngrx/store";
import { Notifikacija, NotifikacijaDTO } from "../Interfaces/Notifikacija";

export const NotifikacijaActions = createActionGroup({
  source: 'Notifikacija',
  events: {
    'Posalji': props<{ notifikacija: NotifikacijaDTO }>(),
    'Prikazi': props<{ notifikacija: Notifikacija }>(),
    'Ukloni': props<{ id: number }>()
  }
});


