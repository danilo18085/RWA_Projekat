import { Component, signal } from '@angular/core';
import { GlavnaStranica } from './Components/glavna-stranica/glavna-stranica';
import { JedanTiket } from './Components/PorudzbineStranica/jedan-tiket/jedan-tiket';
import { TiketModel } from './Interfaces/TiketModel';
import { Tiket } from './Interfaces/Tiket';
import { SkupTiketa } from './Components/PorudzbineStranica/skup-tiketa/skup-tiketa';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App 
{
  protected readonly title = signal('GameShop');
}
