import { Component } from '@angular/core';
import { DevAPIService } from '../dev-api.service';
import { Donut } from '../donut';
import { DonutAPIService } from '../donut-api.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {
  displayDonut:Donut = ({} as any) as Donut;

  constructor(private DonutAPI:DonutAPIService, private DevAPI:DevAPIService){
    DonutAPI.getDonut().subscribe(
      (result:Donut)=>{
        this.displayDonut = result;
        console.log(result);
      }
    ) 
}
}
