import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { TiketModel } from '../../Interfaces/TiketModel';
import { Tiket } from '../../Interfaces/Tiket';
import { AdminService } from '../admin/admin-service';
import { Observable } from 'rxjs';

@Service()
export class TiketService 
{
    private url : string = 'http://localhost:3000/tiket'
    private readonly http: HttpClient = inject(HttpClient)

    private admin_service : AdminService = inject(AdminService)

    napravi_tiket(tiket : TiketModel)
    {
        return this.http.post<TiketModel>(this.url + "/napravi_tiket", tiket)
    }

    vrati_tikete() : Observable<Tiket[]>
    {
        return this.http.get<Tiket[]>(this.url + "/vrati_tikete" + "/" + this.admin_service.vrati_username() + "/" + this.admin_service.vrati_token())
    }

    izbrisi_tiket(id : string)
    {
        console.log(this.url + "/izbrisi_tiket" + "/" + id + "/" + this.admin_service.vrati_username() + "/" + this.admin_service.vrati_token())
        return this.http.delete<Tiket>(this.url + "/izbrisi_tiket" + "/" + id + "/" + this.admin_service.vrati_username() + "/" + this.admin_service.vrati_token())
    }
}
