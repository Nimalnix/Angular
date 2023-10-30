import { Component } from '@angular/core';
import { OnInit,OnDestroy } from '@angular/core';
import { DoCheck,AfterContentChecked } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']


})
export class AppComponent implements OnInit,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {

  firstName: string = '🐼🐼🐼🐼🐼🐼';
  lastName: string = '🐢🐢🐢🐢🐢🐢🐢';
  ngOnInit(): void {
    {//phase 1:initialization done
      //connecting to the backend and fetching data
      console.log("component getting initialized+ " + new Date())
    }
  }
  ngOnDestroy(): void {
    {
      //write the code for connecting to the backend to save the data before componet gets destroyed
      console.log("component destroyed at + " + new Date())
    }
  }
  ngDoCheck(): void {
    {//step 2:verfication everytime the view state changes
      console.log("DpoCheck called")
    }
  }
  ngAfterContentChecked(): void {
    {//step 4 :everytime the view state changes
      console.log("ngAfterContentChecked called")
    }
  }
  ngAfterContentInit(): void {
    {//step 3:
      console.log("content initialization complete.")
    }
  }
  ngAfterViewChecked(): void {
    {//step 6
      console.log("view checking completed.")
    }
  }
  ngAfterViewInit(): void {
    {//step 5
      console.log("view initialization complete.")
    }
  }
  
  title = 'componentlifecycle';
}
