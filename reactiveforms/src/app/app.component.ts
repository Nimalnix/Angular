import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveforms';

userList : any =[];

addUser(udata: any)
{
   console.log(udata);
   console.log(udata.value);
   this.userList.push(udata.value);
}

deleteUser(udata: any)
{
  console.log(udata);
  console.log(udata.value);
  this.userList.splice(udata.value,1);
}
}
