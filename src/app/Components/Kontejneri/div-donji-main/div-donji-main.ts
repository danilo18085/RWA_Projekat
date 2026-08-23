import { Component } from '@angular/core';
import { KorpaParametriDiv } from "../korpa-parametri-div/korpa-parametri-div";
import { SkupIgriceKontejner } from "../skup-igrice-kontejner/skup-igrice-kontejner";

@Component({
  selector: 'app-div-donji-main',
  imports: [KorpaParametriDiv, SkupIgriceKontejner],
  templateUrl: './div-donji-main.html',
  styleUrl: './div-donji-main.css',
})
export class DivDonjiMain {}
