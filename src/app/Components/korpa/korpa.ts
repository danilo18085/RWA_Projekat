import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ElementKorpaModel } from '../../Interfaces/ElementKorpaModel';
import { selectSveElementeKorpe, selectUkupnaCena } from '../../Store/KorpaStore/korpa.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ElementUKorpi } from '../element-u-korpi/element-u-korpi';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TiketModel } from '../../Interfaces/TiketModel';
import { toSignal } from '@angular/core/rxjs-interop';
import { TiketService } from '../../Services/tiket/tiket-service';
import { NotifikacijaActions } from '../../Store/NotifikacijaStore/notifikacija.actions';

@Component({
  selector: 'app-korpa',
  imports: [AsyncPipe, ElementUKorpi, CommonModule, ReactiveFormsModule],
  templateUrl: './korpa.html',
  styleUrl: './korpa.css',
})
export class Korpa {

  private store : Store = inject(Store)
  private tiket_service : TiketService = inject(TiketService)
  niz_elemenata$ : Observable<ElementKorpaModel[]> = this.store.select(selectSveElementeKorpe)
  ukupna_cena$ : Observable<number> = this.store.select(selectUkupnaCena)
  
  elementiKorpe = toSignal(this.niz_elemenata$, { initialValue: [] })
  citaj_ukupnu_cenu = toSignal(this.ukupna_cena$, { initialValue: 0 })

  private fb = inject(FormBuilder);
  protected prikaziFormu = signal(false);

  protected forma = this.fb.group({
    imeIprezime: [''],
    email: [''],
    adresaIsporuke: [''],
    nacinPlacanja: ['KARTICA'], 
  });

  otvoriFormu() 
  {
    if(this.elementiKorpe().length == 0) {alert("Niste uneli nijedan proizvod"); return}
    this.prikaziFormu.set(true)
  }

  zatvoriFormu() {
    this.prikaziFormu.set(false)
    this.forma.reset()
  }

  sacuvaj() {
    if (this.forma.invalid) 
      return;
    
    const obj = this.forma.value

    if(obj.imeIprezime === "" || obj.imeIprezime === undefined || obj.imeIprezime === null) {alert("Morate uneti ime i prezime!"); return}
    if(obj.adresaIsporuke === "" || obj.adresaIsporuke === undefined || obj.adresaIsporuke === null) {alert("Morate uneti adresu isporuke!"); return}
    if(obj.email === "" || obj.email === undefined || obj.email === null) {alert("Morate uneti email!"); return} 
    if(obj.nacinPlacanja === "" || obj.nacinPlacanja === undefined || obj.nacinPlacanja === null) {alert("morate uneti nacin placanja"); return}


    const novi_tiket : TiketModel = 
    {
      kupac: obj.imeIprezime,
      broj_igrica: this.elementiKorpe().length,
      email_adresa: obj.email,
      nacin_placanja: obj.nacinPlacanja,
      adresa_isporuke: obj.adresaIsporuke,
      ukupna_cena: this.citaj_ukupnu_cenu()
    }

    this.tiket_service.napravi_tiket(novi_tiket).subscribe(
      res => console.log(res)
    )

    this.store.dispatch(NotifikacijaActions.posalji_notifikaciju({notifikacija: {trajanje: 6500, poruka: "Uspesno ste kreirali porudzbinu"}}))
    this.store.dispatch(NotifikacijaActions.posalji_notifikaciju({notifikacija: {trajanje: 5500, poruka: "Admin ce pregledati vasu posiljku"}}))

    this.zatvoriFormu()
  }
}
