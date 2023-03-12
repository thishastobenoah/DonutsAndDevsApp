import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donut } from './donut';

@Injectable({
  providedIn: 'root'
})
export class DonutAPIService {
  url:string ="https://grandcircusco.github.io/demo-apis/donuts.json";
  constructor(private  http:HttpClient) { 

  }
  getDonut():Observable<Donut>{
    return this.http.get<Donut>(this.url);
  }

}
