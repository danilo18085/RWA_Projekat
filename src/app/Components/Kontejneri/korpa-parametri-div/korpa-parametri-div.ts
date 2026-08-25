import { Component } from '@angular/core';
import { Korpa } from '../../korpa/korpa';
import { ZanrBox } from "../../zanr-box/zanr-box";
import { Slajder } from '../../slajder/slajder';

@Component({
  selector: 'app-korpa-parametri-div',
  imports: [Korpa, ZanrBox, Slajder],
  templateUrl: './korpa-parametri-div.html',
  styleUrl: './korpa-parametri-div.css',
})
export class KorpaParametriDiv {}
