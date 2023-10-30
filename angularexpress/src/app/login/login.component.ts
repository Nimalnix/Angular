import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BackendAccessService } from '../backend-access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  title = 'Login Page';
  exist:any;
constructor(   http: HttpClient,private baccess:BackendAccessService){}
login(loginForm:any){
 this.exist = this.baccess.login(loginForm);
 
}
}
