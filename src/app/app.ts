import { Component, signal } from '@angular/core';
import { GlavnaStranica } from './Components/glavna-stranica/glavna-stranica';
import { JedanTiket } from './Components/PorudzbineStranica/jedan-tiket/jedan-tiket';
import { TiketModel } from './Interfaces/TiketModel';
import { Tiket } from './Interfaces/Tiket';
import { SkupTiketa } from './Components/PorudzbineStranica/skup-tiketa/skup-tiketa';


@Component({
  selector: 'app-root',
  imports: [GlavnaStranica, JedanTiket, SkupTiketa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GameShop');

  jedan_tiket : Tiket = 
  {
    id: 5,
    kupac: 'Danilo Bogdanovic',
    broj_igrica: 3,
    email_adresa: 'lord0160@gmail.com',
    nacin_placanja: 'KARTICA',
    adresa_isporuke: 'ulica 5. novembar',
    ukupna_cena: 144.52
  }
}
