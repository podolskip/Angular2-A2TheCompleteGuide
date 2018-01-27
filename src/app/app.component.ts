import { Component } from '@angular/core';
//import { OtherComponent, AnotherComponent } from "./other";
import  { DatabindingComponent } from './databinding';

@Component({
  selector: 'first-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [DatabindingComponent]

  //directives: [OtherComponent, AnotherComponent]
})
export class AppComponent {
  title = 'testing configuration of first angular 2 app';
}
