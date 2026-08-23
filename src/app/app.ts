import { Component, signal } from '@angular/core';
import { Header } from './Components/Kontejneri/header/header';
import { MainContainer } from './Components/Kontejneri/main-container/main-container';


@Component({
  selector: 'app-root',
  imports: [Header, MainContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GameShop');
}
