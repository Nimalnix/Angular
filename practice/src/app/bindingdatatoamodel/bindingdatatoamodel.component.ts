import { Component } from '@angular/core';


@Component({
  selector: 'app-bindingdatatoamodel',
  templateUrl: './bindingdatatoamodel.component.html',
  styleUrls: ['./bindingdatatoamodel.component.css']
})
export class BindingdatatoamodelComponent {
  topics=['Angular','React','NodeJS','vue'];

  name:string='rob';
  email:string='';
  phone:string='';
  
}
