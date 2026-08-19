import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Pesma } from '../../Interfaces/Pesma';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pesma_selector, PesmaPoruka } from '../../Store/selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pesma-prikaz',
  imports: [AsyncPipe],
  templateUrl: './pesma-prikaz.html',
  styleUrl: './pesma-prikaz.css',
})
export class PesmaPrikaz {

  
  @Input() pesma : Pesma | null | undefined = null
  @Output() klik_emiter : EventEmitter<Pesma> = new EventEmitter<Pesma>();

  private store : Store = inject(Store)
  selektovana_pesma2$ : Observable<PesmaPoruka> = this.store.select(pesma_selector)


  kliknutoJe() : void
  {
    if(this.pesma)
      this.klik_emiter.emit(this.pesma)

  }
}
