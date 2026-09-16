import { Component, inject, Input } from '@angular/core';
import { ElementKorpaModel } from '../../Interfaces/ElementKorpaModel';
import { Store } from '@ngrx/store';
import { izbaci_iz_korpe_akcija } from '../../Store/KorpaStore/korpa.actions';

@Component({
  selector: 'app-element-u-korpi',
  imports: [],
  templateUrl: './element-u-korpi.html',
  styleUrl: './element-u-korpi.css',
})
export class ElementUKorpi {

  constructor() {}

  @Input() element : ElementKorpaModel | null = null
  private store : Store = inject(Store)

  brisi_element()
  {
    if(this.element)
      this.store.dispatch(izbaci_iz_korpe_akcija({element : this.element}))
  }
}
