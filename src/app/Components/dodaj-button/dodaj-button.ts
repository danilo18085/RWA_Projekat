import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IgricaModelDodavanje } from '../../Interfaces/IgricaModelDodavanje';
import { IgricaService } from '../../Services/igrica-service';
import { Store } from '@ngrx/store';
import { NotifikacijaActions } from '../../Store/notifikacija.actions';
import { vrati_sve_igrice_akcija } from '../../Store/igrica.action';

@Component({
  selector: 'app-dodaj-button',
  imports: [ReactiveFormsModule],
  templateUrl: './dodaj-button.html',
  styleUrl: './dodaj-button.css',
})
export class DodajButton 
{
  private fb = inject(FormBuilder);
  protected prikaziFormu = signal(false);

  private store : Store = inject(Store)
  private igrica_service : IgricaService = inject(IgricaService)

  protected forma = this.fb.group({
    naziv: [''],
    zanr: [''],
    godina: [''],
    rejting: [''],
    cena: [''],
    popust: ['']
  })

  otvoriFormu() 
  {
    this.prikaziFormu.set(true)
  }

  zatvoriFormu() 
  {
    this.prikaziFormu.set(false)
    this.forma.reset()
  }

  sacuvaj() 
  {
    if (this.forma.invalid) 
      return
    
    const obj = this.forma.value
    
    if(this.proveri(obj.naziv)) {alert("Pogresan unos naziva"); return}
    if(this.proveri(obj.zanr)) {alert("Pogresan unos zanra"); return}
    if(this.proveri(obj.godina) || Number(obj.godina) > 2027 || Number(obj.godina) < 1960 ) {alert("Pogresan unos godine"); return}
    if(this.proveri(obj.rejting) || Number(obj.rejting) > 10.0 || Number(obj.rejting) < 1.0) {alert("Pogresan unos rejtinga"); return}
    if(this.proveri(obj.cena) || Number(obj.cena) < 1.0 || Number(obj.cena) > 200.0) {alert("Pogresan unos cene"); return}
    if(this.proveri(obj.popust) || Number(obj.popust) < 0.0 || Number(obj.popust) > 99.0) {alert("pogresan popust"); return}

    const nova_igrica : IgricaModelDodavanje =
    {
      ime: obj.naziv,
      zanr: obj.zanr,
      godina: Math.trunc(Number(obj.godina)),
      rating: Number(Number(obj.rejting).toFixed(1)),
      popust: Math.trunc(Number(obj.popust)),
      osnovna_cena: Math.trunc(Number(obj.cena))
    }

    this.igrica_service.dodaj_igricu(nova_igrica).subscribe(
      rez => {
        if(rez === null || rez === undefined)
          this.store.dispatch(NotifikacijaActions.posalji_notifikaciju({notifikacija: {trajanje: 6500, poruka: "Igrica nije uspesno dodata"}}))
        else
        {
          this.store.dispatch(NotifikacijaActions.posalji_notifikaciju({notifikacija: {trajanje: 6500, poruka: "Igra je uspesno dodata"}}))
          this.store.dispatch(vrati_sve_igrice_akcija())
        }
      }
    )
    this.zatvoriFormu()
  }

  proveri(obj : any) : boolean
  {
    if(obj === null || obj === undefined || obj === "")
      return true

    return false
  }
}
