import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  hotelname='Mariot';
  numberofrooms=10;
  hiderooms=false;
  topics=['Angular','React','NodeJS','vue'];
  name:string='rob';


rooms:Room ={
  totalRooms:10,
  availableRooms:0,
  bookedRooms:5
};

  toggle()
  {
    this.hiderooms=!this.hiderooms;
  }
  
}
