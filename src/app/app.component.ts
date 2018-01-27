import { Component } from '@angular/core';
import { OtherComponent } from "./other";

@Component({
  selector: 'first-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [OtherComponent]
})
export class AppComponent {
  title = 'testing configuration of first angular 2 app';
}
