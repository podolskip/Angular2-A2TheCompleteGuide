import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  directives: [PropertyBindingComponent, EventBindingComponent]
})
export class DatabindingComponent  {
  stringInterpolation = 'this is string interpolation!';
  numberInterpolation = 2;

  onClicked(value: string){
    alert(value);
  }

  onTest(){
    return true;
}
}
