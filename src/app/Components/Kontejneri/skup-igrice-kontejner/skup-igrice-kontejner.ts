import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IgricaModel } from '../../../Interfaces/IgricaModel';
import { AsyncPipe } from '@angular/common';
import { Igrica } from '../../igrica/igrica';
import { vrati_sve_igrice_akcija } from '../../../Store/IgricaStore/igrica.action';
import { igrica_selektor } from '../../../Store/IgricaStore/igrica.selector';


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
