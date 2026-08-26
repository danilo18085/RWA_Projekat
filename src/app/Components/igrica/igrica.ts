import { Component, Input } from '@angular/core';
import { IgricaModel } from '../../Interfaces/IgricaModel';

@Component({
  selector: 'app-igrica',
  imports: [],
  templateUrl: './igrica.html',
  styleUrl: './igrica.css',
})
export class Igrica {

  constructor() {}

  @Input() igrica : IgricaModel | null = null;

  izracunaj_cenu(osnovna_cena : number, popust : number) : string
  {
    return ((osnovna_cena * (100 - popust)) / 100 - 0.01).toFixed(2)
  }
}
