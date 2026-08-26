import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IgricaModel } from '../../../Interfaces/IgricaModel';
import { igrica_selektor } from '../../../Store/igrica.selector';
import { vrati_sve_igrice_akcija } from '../../../Store/igrica.action';
import { AsyncPipe } from '@angular/common';
import { Igrica } from '../../igrica/igrica';


@Component({
  selector: 'app-skup-igrice-kontejner',
  imports: [AsyncPipe, Igrica],
  templateUrl: './skup-igrice-kontejner.html',
  styleUrl: './skup-igrice-kontejner.css',
})
export class SkupIgriceKontejner implements OnInit{

  private store = inject(Store)
  niz_igrica$ : Observable<IgricaModel[]> = this.store.select(igrica_selektor)

  constructor() {}


  ngOnInit(): void {
    this.store.dispatch(vrati_sve_igrice_akcija())
  }

}
