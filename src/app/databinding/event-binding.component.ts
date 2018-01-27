import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClickedAlert()" >Click me!</button>
    <button (click)="onClicked()" >Click me with custom event</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();

  onClickedAlert(){
    alert("build alert works!");
  }

  onClicked() {
    this.clicked.emit('it works!');
  }
}
