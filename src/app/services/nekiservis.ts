import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Pesma } from '../Interfaces/Pesma';

@Service()
export class Nekiservis 
{

  private url = 'http://localhost:3000/pesme';
  private readonly http: HttpClient = inject(HttpClient)

  constructor() {}

  getSvePesme(): Observable<Pesma[]> 
  {
    return this.http.get<Pesma[]>(this.url);
  }
}

