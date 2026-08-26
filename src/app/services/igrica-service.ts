import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { IgricaModel } from '../Interfaces/IgricaModel';
import { Observable } from 'rxjs';

@Service()
export class IgricaService {

    private url = 'http://localhost:3000/igrica';
    private readonly http: HttpClient = inject(HttpClient)

    constructor() {}

    vrati_sve_igrice(): Observable<IgricaModel[]> 
    {
      return this.http.get<IgricaModel[]>(this.url);
    }
}
