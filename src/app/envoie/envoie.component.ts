import { Component, OnInit } from '@angular/core';
import { EmeteurModel } from '../model/emeteur.model';
import { EnvoieModel } from '../model/envoie.model';
import { InfoModel } from '../model/info.model';
import { RecepteurModel } from '../model/recepteur.model';
import { EnvoieService } from '../service/envoie.service';

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

  constructor(private envoieService: EnvoieService) { }

  ngOnInit(): void {

  }

  saveEnvoie(){

    this.info.emeteur = this.emeteur;
    this.info.recepteur = this.recepteur;
    this.info.envoie = this.envoie;
    
    this.envoieService.addEnvoie(this.info).subscribe(
      (data) => {

        console.log(data);
      },
      (error) => {

        console.log(error);
      }
    );

  }

  

}
