import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { TiketModel } from '../../Interfaces/TiketModel';

@Service()
export class TiketService 
{
    private url : string = 'http://localhost:3000/tiket'
    private readonly http: HttpClient = inject(HttpClient)

    napravi_tiket(tiket : TiketModel)
    {
        return this.http.post<TiketModel>(this.url + "/napravi_tiket", tiket)
    }
}
