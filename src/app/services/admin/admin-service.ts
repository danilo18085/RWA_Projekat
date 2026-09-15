import { HttpClient } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenModel } from '../../Interfaces/TokenModel';
import { AdminModel } from '../../Interfaces/AdminModel';

@Service()
export class AdminService 
{
    private cookies = inject(CookieService)

    private _username = signal<string | null>(this.cookies.get('username'))

    readonly isAdmin = computed(() => {
        if(this._username() === null || this._username() === undefined || this._username() === "")
            return false
        return true
    })

    readonly username = this._username.asReadonly()

    private url : string = 'http://localhost:3000/token'
    private readonly http: HttpClient = inject(HttpClient)

    logout()
    {
        const admin : AdminModel =
        {
            username: this.cookies.get("username"),
            password: ""
        }
        this.http.delete<AdminModel>(this.url + "/obrisi_token", {body: admin}).subscribe(
            rez => {console.log(rez)}
        )

        this.cookies.delete('username')
        this.cookies.delete('token')
        this._username.set(null)
    }

    login(admin : AdminModel) 
    {
        return this.http.post<TokenModel>(this.url + "/generisi_token", admin)
    }

    postavi_parametre(username_admina : string, vrednost_tokena : string)
    {
        this.cookies.set("username", username_admina, 1)
        this.cookies.set("token", vrednost_tokena, 1)
        this._username.set(username_admina)
    }

    vrati_token()
    {
        return this.cookies.get("token")
    }

    vrati_username()
    {
        return this.cookies.get("username")
    }

}
