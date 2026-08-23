import { Component } from '@angular/core';
import { DivGornjiMain } from '../div-gornji-main/div-gornji-main';
import { DivDonjiMain } from '../div-donji-main/div-donji-main';

@Component({
  selector: 'app-main-container',
  imports: [DivGornjiMain, DivDonjiMain],
  templateUrl: './main-container.html',
  styleUrl: './main-container.css',
})
export class MainContainer {}
