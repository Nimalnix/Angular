import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactappforms';
  userList:any=[];
  addUser(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    this.userList.push(this.userForm.value);
  }else
    console.log('Validation error');
  }
  
userForm:any=new FormGroup({
  //FormControl repreents input items in the form
  //minlength and maxlength are used for string fields
firstName:new FormControl('',[Validators.minLength(5),Validators.maxLength(50),Validators.required]),
lastName:new FormControl('',[Validators.minLength(5),Validators.maxLength(50),Validators.required]),
joinDate:new FormControl('',[Validators.required]),


//min and max are used for numeric fields
salary: new FormControl(40000,[Validators.min(40000),Validators.max(100000),Validators.required])
},
{
  updateOn:'change'
}
);
 
}
 