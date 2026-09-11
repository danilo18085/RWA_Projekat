import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { IgricaModel } from '../Interfaces/IgricaModel';
import { EMPTY, filter, Observable } from 'rxjs';
import { Filter } from '../Interfaces/Filter';

@Service()
export class IgricaService {

    private url : string = 'http://localhost:3000/igrica'
    private readonly http: HttpClient = inject(HttpClient)

    constructor() {}

    vrati_sve_igrice() : Observable<IgricaModel[]> 
    {
      return this.http.get<IgricaModel[]>(this.url)
    }

    vrati_igre_po_filteru(param : Filter)
    {
      const params = new HttpParams()
        .set("search", param.search)
        .set("zanr", param.zanr.join(","))
        .set("max_cena", param.max_cena.toString())

      return this.http.get<IgricaModel[]>(this.url + "/igrice_filter", { params })
    }

}
