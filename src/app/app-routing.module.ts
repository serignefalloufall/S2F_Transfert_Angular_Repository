import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnvoieComponent } from './envoie/envoie.component';

const routes: Routes = [
  { path: 'envoie', component: EnvoieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
