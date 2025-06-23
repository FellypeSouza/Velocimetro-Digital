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
  watchId:any = null;
  maxSpeed:number = 0;
  latitudeValue:number = 0;
  longitudeValue:number = 0;
  activeTime:string = "";

  startSpeedometer():void{
    //Mudar o estado do botão
    this.changeButton = false;
    this.activeTime = this.timer();

    //Começo a capturar a localização
    this.watchId = navigator.geolocation.watchPosition((position)=>{
        this.latitudeValue = position.coords.latitude;
        this.longitudeValue = position.coords.longitude;

        //Verificação se houve mudança na velocidade
        if (position.coords.speed != null) {
          //Recebo o valor da velocidade, multiplico por 3.6 para converter de m/s para km/h, e ajusto para apenas uma casa decimal
          this.speedElement = parseInt((position.coords.speed * 3.6).toFixed(1));
          //Verificar se a velocidade atual é maior que a Velocidade Maxima
          if (this.speedElement > this.maxSpeed) {
            this.maxSpeed = this.speedElement;
          }
        }
        else{
          this.speedElement = 0;
        }
      },
      (error)=>{
        alert("Houve um erro");
        console.log(`Erro: ${error}`);
      }, 
      {
        enableHighAccuracy: true
      }
    )
  }
  stopSpeedometer():void{
    //Mudo o estado do botão
    this.changeButton = true;
    //Paro de capturar a localização
    navigator.geolocation.clearWatch(this.watchId);
  }
  timer():string{
    let sec:number = 0o0;
    let min:number = 0;
    let time:string = `${min} : ${sec}`;

    setInterval(()=>{
      time = `${min} : ${sec++}`;
      console.log(time);
      return time;
    }, 1000);
    
    return time;
  }
}
