import { Component, OnInit } from '@angular/core';
import { EmeteurService } from '../service/emeteur.service';

@Component({
  selector: 'app-emeteur',
  templateUrl: './emeteur.component.html',
  styleUrls: ['./emeteur.component.css']
})
export class EmeteurComponent implements OnInit {

  constructor(private emeteurService: EmeteurService) { 

    emeteurService.findAllEmeteur()
      .subscribe(resultat=>{

        console.log(resultat);
      },
      error=>{

        console.log(error);

      });
  }

  ngOnInit(): void {
  }

}
