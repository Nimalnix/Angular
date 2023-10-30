import { Component } from '@angular/core';
import { UserData } from './UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  udata:UserData=new UserData();
  usersList : UserData[]=[];//Array of UserData objects
  title='bindings';
  themeName:string='forest';
  colorName:string='Red';
  size:number=100;
  stateName:string='Tamil nadu';
  

  
  enableDisable:boolean=false;
  saveData(event:Event){
    this.usersList.push(this.udata);
  
    console.log('Added data to array');
    console.log(this.udata);
    this.udata=new UserData();
  }
  checkData(){
  
    console.log(this.udata.firstName.length)
  }

  sendData(){
    console.log("sending data to Express backend.")
    //code for final valiadation
    //code for cummunicating with the back end
  }
  

}
