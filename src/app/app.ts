import { Component, signal } from '@angular/core';
import { GlavnaStranica } from './Components/glavna-stranica/glavna-stranica';


@Component({
  selector: 'app-root',
  imports: [GlavnaStranica],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GameShop');
}
