import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

 
@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {

  contactList:any=[];
  userList:any=[];
  expresponse:string="";
  exist: boolean | undefined;
 
  dataw: any;
/**
 * Constructor for the class.
 * @param {HttpClient} http - The HttpClient dependency.
 */
constructor(private http: HttpClient, private router: Router) {
}

 login(loginForm:any){
    this.http.get(`http://localhost:9902/Login?id=${loginForm.value.id}&pass=${loginForm.value.pass}`).subscribe((res)=>{
    this.dataw= res;
    console.log(this.dataw);
    if(this.dataw.length > 0){
      this.exist = true;
      this.router.navigate(['/home']);
    }
    else{
      this.exist = false;
    }
    console.log(this.exist);  
    })
   
    return this.exist
  }
  data(data: any) {
    throw new Error('Method not implemented.');
  }

    getAllUser(){
        this.http.get('http://localhost:9902/Getall').subscribe((response)=>
        {
          this.userList=response;
          console.log(this.userList);
      
        });
        return this.userList;
    }
 
  addUser(udata:any):any{
 
   // console.log(udata);
    //console.log(udata.value);
    //this.userList.push(udata.value);
    this.http.post('http://localhost:9902/add',udata.value).subscribe((response)=>
    {
      this.expresponse=response.toString();
     
    });
    return this.expresponse;
  }
  updateUser(udata:any){
    this.http.post('http://localhost:9902/update',udata.value).subscribe((response)=>
   
    {
      this.userList=response;
      console.log(this.userList);
    });
 
  }
  deleteUser(udata:any){
    this.http.post('http://localhost:9902/delete',udata.value).subscribe((response)=>
    {
      this.userList=response;
      console.log(this.userList);
    });
  }


  addContact(cdata:any){
    this.http.post('http://localhost:9902/AddContact',cdata.value).subscribe((response)=>
    {
      this.contactList=response;
      console.log(this.contactList);
    });
    return this.expresponse;
  }

  getAllContact(){ 
    this.http.get('http://localhost:9902/allcontact').subscribe((response)=>
    {
      this.contactList=response;
      console.log(this.contactList);
    });
    return this.contactList;
  }

  updateContact(cdata:any){
    this.http.post('http://localhost:9902/updatecontact',cdata.value).subscribe((response)=>
    {
      this.contactList=response;
      console.log(this.contactList);
    });
  }
  
  deleteContact(cdata:any){
    this.http.post('http://localhost:9902/deletecontact',cdata.value).subscribe((response)=>
    {
      this.contactList=response;
      console.log(this.contactList);
    });
  }

 
}