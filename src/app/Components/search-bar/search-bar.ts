import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { setuj_search } from '../../Store/filteri.actions';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {

  private store : Store = inject(Store)

  onInput(event : Event) : void 
  {
    const value = (event.target as HTMLInputElement).value
    this.store.dispatch(setuj_search({input: value}))
  }
}
