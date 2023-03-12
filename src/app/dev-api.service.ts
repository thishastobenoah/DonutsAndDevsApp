import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dev } from './dev';

@Injectable({
  providedIn: 'root'
})
export class DevAPIService {
  url:string ="https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";
  constructor(private http:HttpClient) {

   }

   getDev():Observable<Dev>{
    return this.http.get<Dev>(this.url);
   }
}
