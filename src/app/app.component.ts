import { Component } from '@angular/core';

//my barrel
import { CustomerService } from './customer/index';

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [CustomerService]
})
export class AppComponent  { 
  //[ ] means property binding - one way Component to DOM
  //( ) means event binding DOM to component
  name = 'Angular';
  wardsColor = 'red';
  changeSuitColor(){
     this.wardsColor = this.wardsColor === 'red' ? 'blue' : 'red';
  }
}