import { Component } from '@angular/core';
import { Dev } from '../dev';
import { DevAPIService } from '../dev-api.service';
import { DonutAPIService } from '../donut-api.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent {
 
  displayDev:Dev = ({} as any) as Dev;
  constructor(private DonutAPI:DonutAPIService, private DevAPI:DevAPIService){
   DevAPI.getDev().subscribe(
      (result:Dev)=>{
        this.displayDev = result;
        console.log(result);
      }
    )
  }
}
