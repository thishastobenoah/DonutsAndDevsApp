import { Component } from '@angular/core';
import { Dev } from './dev';
import { DevAPIService } from './dev-api.service';
import { Donut } from './donut';
import { DonutAPIService } from './donut-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DonutsAndDevsApp';


  displayDonut:Donut = ({} as any) as Donut;
  displayDev:Dev = ({} as any) as Dev;
  constructor(private DonutAPI:DonutAPIService, private DevAPI:DevAPIService){
    DonutAPI.getDonut().subscribe(
      (result:Donut)=>{
        this.displayDonut = result;
        console.log(result);
      }
    )

    
    DevAPI.getDev().subscribe(
      (result:Dev)=>{
        this.displayDev = result;
        console.log(result);
      }
    )
  }

  
}
