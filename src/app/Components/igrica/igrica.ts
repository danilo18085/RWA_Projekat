import { Component, inject, Input } from '@angular/core';
import { IgricaModel } from '../../Interfaces/IgricaModel';
import { Store } from '@ngrx/store';
import { dodaj_u_korpu_akcija } from '../../Store/KorpaStore/korpa.actions';
import { ElementKorpaModel } from '../../Interfaces/ElementKorpaModel';
import { GeneratorID } from '../../Services/generator/generator-id';
import { AdminService } from '../../Services/admin/admin-service';
import { IgricaService } from '../../Services/igrica/igrica-service';
import { NotifikacijaActions } from '../../Store/NotifikacijaStore/notifikacija.actions';
import { vrati_sve_igrice_akcija } from '../../Store/IgricaStore/igrica.action';


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
  protected admin_service : AdminService = inject(AdminService)
  private igrica_service : IgricaService = inject(IgricaService)

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

  izbrisi_igru()
  {
    if(this.igrica !== null)
      this.igrica_service.izbrisi_igricu(this.igrica.id.toString()).subscribe(
        res => {
          console.log(res)
          this.store.dispatch(NotifikacijaActions.posalji_notifikaciju({notifikacija: {trajanje: 5500, poruka: "Uspesno ste obrisali igru"}}))
          this.store.dispatch(vrati_sve_igrice_akcija())
        }
    )
  }


}
