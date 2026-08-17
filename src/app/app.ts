import { Component, signal } from '@angular/core';
import { Playlist } from './Components/playlist/playlist';
import { SelekcijaTest } from './Components/selekcija-test/selekcija-test';


@Component({
  selector: 'app-root',
  imports: [Playlist, SelekcijaTest],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GameShop');
}
