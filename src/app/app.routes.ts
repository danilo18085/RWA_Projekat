import { Routes } from '@angular/router';
import { GlavnaStranica } from './Components/glavna-stranica/glavna-stranica';
import { SkupTiketa } from './Components/PorudzbineStranica/skup-tiketa/skup-tiketa';

export const routes: Routes = [
    {path: "", component: GlavnaStranica},
    {path: "tiketi", component: SkupTiketa}
]
