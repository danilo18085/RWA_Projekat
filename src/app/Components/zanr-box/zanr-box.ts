import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { setuj_zanr } from '../../Store/FilterStore/filteri.actions';

@Component({
  selector: 'app-zanr-box',
  imports: [],
  templateUrl: './zanr-box.html',
  styleUrl: './zanr-box.css',
})
export class ZanrBox 
{

  private store : Store = inject(Store)

  promena_okini_akciju(event: Event) 
  {
    const container = event.currentTarget as HTMLElement
    const checked = container.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked')
    const value = Array.from(checked).map(cb => cb.value)

    this.store.dispatch(setuj_zanr({input: value}))
  }

}
