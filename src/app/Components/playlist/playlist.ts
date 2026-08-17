import { Component, OnInit } from '@angular/core';
import { Pesma } from '../../Interfaces/Pesma';
import { PesmaPrikaz } from '../pesma-prikaz/pesma-prikaz';
import { Store } from '@ngrx/store';
import { pesma_je_kliknuta_akcija } from '../../Store/actions';

@Component({
  selector: 'app-playlist',
  imports: [PesmaPrikaz],
  templateUrl: './playlist.html',
  styleUrl: './playlist.css',
})
export class Playlist implements OnInit {

  private pesme : Pesma[] = []

  constructor(private store : Store) {}

  ngOnInit(): void 
  {
    this.pesme = [{id: 1, naziv: "Pustinja", godina: 1995}, {id: 2, naziv: "Pesma od bola", godina: 1996}, 
                  {id: 3, naziv:"Ista kao ja", godina: 2000}, {id: 4, naziv: "Civas", godina: 2001}]
  }

  vratiPesme() : Pesma[]
  {
    return this.pesme
  }

  reagujNaKlik(p : Pesma) : void
  {
    //alert("Pesma kliknuta: " + p.naziv);
    this.store.dispatch(pesma_je_kliknuta_akcija({jedna_pesma: p}));
  }

}
