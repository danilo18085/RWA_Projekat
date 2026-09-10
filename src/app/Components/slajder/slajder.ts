import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { setuj_cenu } from '../../Store/filteri.actions';

@Component({
  selector: 'app-slajder',
  imports: [],
  templateUrl: './slajder.html',
  styleUrl: './slajder.css',
})
export class Slajder {

  private store : Store = inject(Store)

  @ViewChild("labela_za_menjanje")
  labela_ref : ElementRef<HTMLLabelElement> | undefined

  promena_akcija(event: Event)
  {
  const value = (event.target as HTMLInputElement).value

  this.store.dispatch(setuj_cenu({input : Number(value)}))

  if(this.labela_ref)
    this.labela_ref.nativeElement.innerHTML = `${value}$`
  }

}
