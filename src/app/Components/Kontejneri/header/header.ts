import { Component, inject, signal } from '@angular/core';
import { AdminService } from '../../../Services/admin/admin-service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AdminModel } from '../../../Interfaces/AdminModel';
import { Store } from '@ngrx/store';
import { DodajButton } from '../../dodaj-button/dodaj-button';
import { Router } from '@angular/router';
import { NotifikacijaActions } from '../../../Store/NotifikacijaStore/notifikacija.actions';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule, DodajButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header
{

  private store : Store = inject(Store)
  adminService : AdminService = inject(AdminService)

  private fb = inject(FormBuilder);
  protected prikaziFormu = signal(false);

  private router : Router = inject(Router)


  logout()
  {
    this.adminService.logout()
  }

  protected forma = this.fb.group({
    username: [''],
    password: [''],
  })

  otvoriFormu() 
  {
    this.prikaziFormu.set(true)
  }

  zatvoriFormu() 
  {
    this.prikaziFormu.set(false)
    this.forma.reset()
  }

  sacuvaj() 
  {
    if (this.forma.invalid) 
      return
    
    const obj = this.forma.value

    if(obj.username === "" || obj.username === undefined || obj.username === null) {alert("Morate uneti username!"); return}
    if(obj.password === "" || obj.password === undefined || obj.password === null) {alert("Morate uneti password!"); return}


    const admin : AdminModel = 
    {
      username: obj.username,
      password: obj.password
    }

    this.adminService.login(admin).subscribe(
      rez => {
        if(rez === null || rez === undefined)
        {
          alert("Neuspeno logovanje")
          this.zatvoriFormu()
        }
        else
        {
          this.adminService.postavi_parametre(rez.username_admina, rez.vrednost_tokena)
          this.store.dispatch(NotifikacijaActions.posalji_notifikaciju({notifikacija: {trajanje: 5500, poruka: "Uspesno ste se ulogovali"}}))
          this.zatvoriFormu()
        }
      }
    )
    
  }

  dugme_tiketi()
  {
    this.router.navigate(['/tiketi'])
  }
}
