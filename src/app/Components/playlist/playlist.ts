import { Component, inject, OnInit } from '@angular/core';
import { Pesma } from '../../Interfaces/Pesma';
import { PesmaPrikaz } from '../pesma-prikaz/pesma-prikaz';
import { Store } from '@ngrx/store';
import { pesma_je_kliknuta_akcija, ucitaj_sve_pesme } from '../../Store/actions';
import { vracene_pesme_selector } from '../../Store/selector';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-playlist',
  imports: [PesmaPrikaz, AsyncPipe],
  templateUrl: './playlist.html',
  styleUrl: './playlist.css',
})
export class Playlist implements OnInit {

  constructor() {}

  private store : Store = inject(Store)
  private pesme$ : Observable<Pesma[]> = of([])

  ngOnInit(): void 
  {
    this.pesme$ = this.store.select(vracene_pesme_selector)
    this.store.dispatch(ucitaj_sve_pesme())
  }

  vratiPesme() : Observable<Pesma[]>
  {
    return this.pesme$
  }

  reagujNaKlik(p : Pesma) : void
  {
    this.store.dispatch(pesma_je_kliknuta_akcija({jedna_pesma: p}));
  }

}
