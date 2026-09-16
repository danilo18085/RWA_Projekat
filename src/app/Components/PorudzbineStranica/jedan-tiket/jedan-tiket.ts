import { Component, inject, Input } from '@angular/core';
import { Tiket } from '../../../Interfaces/Tiket';
import { TiketService } from '../../../Services/tiket/tiket-service';
import { Store } from '@ngrx/store';
import { izbrisi_tiket_akcija, vrati_sve_tikete } from '../../../Store/TiketStore/tiket.actions';

@Component({
  selector: 'app-jedan-tiket',
  imports: [],
  templateUrl: './jedan-tiket.html',
  styleUrl: './jedan-tiket.css',
})
export class JedanTiket 
{
  @Input() tiket : null | Tiket = null
  private tiket_service : TiketService = inject(TiketService)
  private store : Store = inject(Store)

  prihvati() 
  {
    if(this.tiket)
    {
      this.tiket_service.izbrisi_tiket(this.tiket.id.toString()).subscribe(
        (rez) =>{
          if (this.tiket !== null)
            this.store.dispatch(izbrisi_tiket_akcija({id: this.tiket.id}))
          
        } 
      )
    }
      
  }

}
