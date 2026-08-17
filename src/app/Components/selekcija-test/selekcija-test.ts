import { Component, inject } from '@angular/core';
import { Pesma } from '../../Interfaces/Pesma';
import { Store } from '@ngrx/store';
import { pesma_selector, PesmaPoruka } from '../../Store/selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-selekcija-test',
  imports: [AsyncPipe],
  templateUrl: './selekcija-test.html',
  styleUrl: './selekcija-test.css',
})
export class SelekcijaTest 
{

  private readonly store = inject(Store);

  selektovana_pesma$ : Observable<PesmaPoruka> = this.store.select(pesma_selector)

  
}
