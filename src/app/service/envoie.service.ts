import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoModel } from '../model/info.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvoieService {

  url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  addEnvoie(infoModel: InfoModel): Observable<any>{

    return this.http.post(this.url+'add',infoModel);
  }

  findAllEnvoie(){

    return this.http.get<any>(this.url + 'allEnvoie');

  }
}
