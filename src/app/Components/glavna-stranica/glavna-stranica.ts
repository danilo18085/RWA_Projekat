import { Component } from '@angular/core';
import { Header } from '../Kontejneri/header/header';
import { MainContainer } from '../Kontejneri/main-container/main-container';
import { Notification } from '../notification/notification';

@Component({
  selector: 'app-glavna-stranica',
  imports: [Header, MainContainer, Notification],
  templateUrl: './glavna-stranica.html',
  styleUrl: './glavna-stranica.css',
})
export class GlavnaStranica {}
