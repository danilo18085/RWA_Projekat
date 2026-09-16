import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { IgricaModel } from '../../Interfaces/IgricaModel';
import { Observable } from 'rxjs';
import { Filter } from '../../Interfaces/Filter';
import { IgricaModelDodavanje } from '../../Interfaces/IgricaModelDodavanje';
import { AdminService } from '../admin/admin-service';

@Service()
export class IgricaService {

    private url : string = 'http://localhost:3000/igrica'
    private readonly http: HttpClient = inject(HttpClient)

    private admin_service : AdminService = inject(AdminService)

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

    dodaj_igricu(igra : IgricaModelDodavanje)
    {
      return this.http.post<IgricaModel>(this.url + "/dodaj_igricu/" + this.admin_service.vrati_username() + "/" + this.admin_service.vrati_token(), igra)
    }

    izbrisi_igricu(id : string)
    {
      return this.http.delete<IgricaModel>(this.url + "/izbrisi_igricu/" + id.toString() + "/" + this.admin_service.vrati_username() + "/" + this.admin_service.vrati_token())
    }

}
