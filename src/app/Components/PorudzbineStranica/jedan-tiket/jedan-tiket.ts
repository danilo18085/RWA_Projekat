import { Component, Input } from '@angular/core';
import { Tiket } from '../../../Interfaces/Tiket';

@Component({
  selector: 'app-jedan-tiket',
  imports: [],
  templateUrl: './jedan-tiket.html',
  styleUrl: './jedan-tiket.css',
})
export class JedanTiket 
{
  @Input() tiket : null | Tiket = null

  prihvati() 
  {
    alert("PRIHVATIO SAMMM")
  }

}
