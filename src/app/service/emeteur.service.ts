import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoModel } from '../model/info.model';

@Injectable({
  providedIn: 'root'
})
export class EmeteurService {

  url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  findAllEmeteur(){

    return this.http.get<any>(this.url + 'allEmeteur');

  }
}
