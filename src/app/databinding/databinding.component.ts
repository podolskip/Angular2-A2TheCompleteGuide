import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  directives: [PropertyBindingComponent]
})
export class DatabindingComponent  {
  stringInterpolation = 'this is string interpolation!';
  numberInterpolation = 2;



  onTest(){
    return true;
}
}
