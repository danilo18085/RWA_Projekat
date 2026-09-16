import { createActionGroup, props } from "@ngrx/store";
import { Notifikacija, NotifikacijaDTO } from "../../Interfaces/Notifikacija";

export const NotifikacijaActions = createActionGroup({
  source: 'Notifikacija',
  events: {
    'Posalji_notifikaciju': props<{ notifikacija: NotifikacijaDTO }>(),
    'Prikazi_notifikaciju': props<{ notifikacija: Notifikacija }>(),
    'Ukloni_notifikaciju': props<{ id: number }>()
  }
})


