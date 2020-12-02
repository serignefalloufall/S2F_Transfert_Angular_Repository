import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvoieComponent } from './envoie/envoie.component';
import { EnvoieService } from './service/envoie.service';
import { HttpClientModule } from '@angular/common/http';
import { EmeteurComponent } from './emeteur/emeteur.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    EnvoieComponent,
    EmeteurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //test
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    EnvoieService //pour faire l'injection de depend...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
