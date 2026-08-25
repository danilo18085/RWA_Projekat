import { Component, signal } from '@angular/core';
import { Header } from './Components/Kontejneri/header/header';
import { MainContainer } from './Components/Kontejneri/main-container/main-container';
import { Notification } from "./Components/notification/notification";


@Component({
  selector: 'app-root',
  imports: [Header, MainContainer, Notification],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GameShop');
}
