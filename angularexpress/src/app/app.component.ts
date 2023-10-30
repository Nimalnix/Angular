
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAccessService } from './backend-access.service';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms';
  userList:any=[];
  expresponse:string="";
 
 
  constructor(private http:HttpClient, private baccess:BackendAccessService){
  }
    getAllUser(){
      this.userList=this.baccess.getAllUser();
    }
 
  addUser(udata:any){
    this.expresponse=this.baccess.addUser(udata);
   
  }
  updateUser(udata:any){
    
   
   
  }
  deleteUser(udata:any){
   
  }
 
}
 