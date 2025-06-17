import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Speedometer } from '../components/speedometer/speedometer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Speedometer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'main';
}
