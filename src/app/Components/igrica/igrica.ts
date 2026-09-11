import { Component, inject, Input } from '@angular/core';
import { IgricaModel } from '../../Interfaces/IgricaModel';
import { Store } from '@ngrx/store';
import { dodaj_u_korpu_akcija } from '../../Store/korpa.actions';
import { ElementKorpaModel } from '../../Interfaces/ElementKorpaModel';
import { GeneratorID } from '../../Services/generator-id';

@Component({
  selector: 'app-igrica',
  imports: [],
  templateUrl: './igrica.html',
  styleUrl: './igrica.css',
})
export class Igrica {

  constructor() {}

  private store : Store = inject(Store)
  private generatorService : GeneratorID = inject(GeneratorID)

  @Input() igrica : IgricaModel | null = null;

  izracunaj_cenu(osnovna_cena : number, popust : number) : string
  {
    return ((osnovna_cena * (100 - popust)) / 100 - 0.01).toFixed(2)
  }

  dodaj_u_korpu() : void 
  {
    if(this.igrica)
    {
        const el : ElementKorpaModel = {
        id: this.generatorService.generisiID(),
        naziv: this.igrica.ime,
        cena: Number(this.izracunaj_cenu(this.igrica.osnovna_cena, this.igrica.popust))
    }
    this.store.dispatch(dodaj_u_korpu_akcija({element: el}))
    }
  }
}
