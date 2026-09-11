import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ElementKorpaModel } from '../../Interfaces/ElementKorpaModel';
import { selectSveElementeKorpe, selectUkupnaCena } from '../../Store/korpa.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ElementUKorpi } from '../element-u-korpi/element-u-korpi';

@Component({
  selector: 'app-korpa',
  imports: [AsyncPipe, ElementUKorpi, CommonModule],
  templateUrl: './korpa.html',
  styleUrl: './korpa.css',
})
export class Korpa {

  private store : Store = inject(Store)
  niz_elemenata$ : Observable<ElementKorpaModel[]> = this.store.select(selectSveElementeKorpe)
  ukupna_cena$ : Observable<number> = this.store.select(selectUkupnaCena)


}
