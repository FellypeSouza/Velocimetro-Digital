import { Component } from '@angular/core';

@Component({
  selector: 'app-speedometer',
  imports: [],
  templateUrl: './speedometer.html',
  styleUrl: './speedometer.scss'
})
export class Speedometer {
  speedElement:number = 0;
  unitSpeed:string = "KM/H";
  changeButton:boolean = true;

  startSpeedometer():void{
    this.changeButton = false;
  }
  stopSpeedometer():void{
    this.changeButton = true;
  }
}
