import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstangularproject';
  state: string='Tamil nadu';
  city: string='Chennai';
  firstName: string='';
  lastName: string='';
}
