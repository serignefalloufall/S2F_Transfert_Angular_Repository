import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmeteurComponent } from './emeteur/emeteur.component';
import { EnvoieComponent } from './envoie/envoie.component';

const routes: Routes = [
  { path: 'envoie', component: EnvoieComponent},
  { path: 'liste', component: EnvoieComponent},

  { path: 'emeteur', component: EmeteurComponent},

  { path: '', redirectTo: '/envoie', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
