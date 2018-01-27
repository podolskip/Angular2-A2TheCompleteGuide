import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    {{person.name}} is about {{person.age}} years old.
  `
})
export class TwoWayBindingComponent {
  person = {
    name: 'Pat',
    age: 31
  };

}
