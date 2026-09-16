import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tiket } from '../../../Interfaces/Tiket';
import { tiket_selector } from '../../../Store/TiketStore/tiket.selector';
import { vrati_sve_tikete } from '../../../Store/TiketStore/tiket.actions';
import { AsyncPipe } from '@angular/common';
import { JedanTiket } from '../jedan-tiket/jedan-tiket';

@Component({
  selector: 'app-skup-tiketa',
  imports: [AsyncPipe, JedanTiket],
  templateUrl: './skup-tiketa.html',
  styleUrl: './skup-tiketa.css',
})
export class SkupTiketa implements OnInit
{
  private store : Store = inject(Store)

  niz_tiketa$ : Observable<Tiket[]> = this.store.select(tiket_selector)

  ngOnInit(): void 
  {
    this.store.dispatch(vrati_sve_tikete())
  }

  vrati_nazad()
  {
    alert("vratio sam nazad")
  }

}
