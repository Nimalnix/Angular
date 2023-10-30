import { Component } from '@angular/core';


//by default angluar follows external styel sheet
@Component({
  selector: 'app-root',
  template: '<div style="color:blue;"><b>Welcome to Angular</b><br><u>Intro to Angular</u></div>',
  styles:['b{color:blue;}','div{color:pink;}']
})
export class AppComponent {
  title = 'firstangular';
  name = 'Nimal sugar';
}
