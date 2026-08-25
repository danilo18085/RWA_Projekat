import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { notifikacija_selektor } from '../../Store/notifikacija.selector';
import { Notifikacija } from '../../Interfaces/Notifikacija';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [AsyncPipe],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {

  private store = inject(Store)

  niz_notifikacija$ : Observable<Notifikacija[]> = this.store.select(notifikacija_selektor)


  constructor() {
    this.niz_notifikacija$.subscribe(
      x => {console.log("Primio sam: " + x)}
    )
  }
}
