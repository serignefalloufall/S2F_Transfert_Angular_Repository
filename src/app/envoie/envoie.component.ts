import { Component, OnInit } from '@angular/core';
import { EmeteurModel } from '../model/emeteur.model';
import { EnvoieModel } from '../model/envoie.model';
import { InfoModel } from '../model/info.model';
import { RecepteurModel } from '../model/recepteur.model';
import { EnvoieService } from '../service/envoie.service';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-envoie',
  templateUrl: './envoie.component.html',
  styleUrls: ['./envoie.component.css']
})
export class EnvoieComponent implements OnInit {

  emeteur = new EmeteurModel();
  recepteur = new RecepteurModel();
  envoie = new EnvoieModel();
  info = new InfoModel();

  
  public navigation_url: any;//pour recuperer l'url saisie au niveau de navigateur

  listeEnvoie: any //pour recuperer la liste des envoie

  constructor(private envoieService: EnvoieService,//pour acceder au methode du service
              private toastr: ToastrService,
              private router: Router
              ) { 

                envoieService.findAllEnvoie()
                .subscribe(
                  resultat=>{

                    console.log(resultat);
                    this.listeEnvoie = resultat;
                },
                  error=>{
                    console.log(error);
                  }

                );

              }

  ngOnInit(): void {

    //recuperer l'url en cours
    this.navigation_url = this.router.url;

  }

  saveEnvoie(){

    this.info.emeteur = this.emeteur;
    this.info.recepteur = this.recepteur;
    this.info.envoie = this.envoie;
    
    this.envoieService.addEnvoie(this.info).subscribe(
      
      (data) => {

        console.log(data);
        this.showSuccess();
        this.router.navigate(['liste']); // pour faire la redirection vers la liste apres envoie
      },
      (error) => {

        console.log(error);
        this.showError();
      }
    );

  }
  showSuccess() {
    this.toastr.success('Envoie Added', 'Success');
  }
  showError() {
      this.toastr.success('Something went wrong', 'Error');
    }
  

}
