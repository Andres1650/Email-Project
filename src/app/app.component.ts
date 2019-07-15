import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked, DoCheck, AfterContentInit{
  title = 'my-first-project';
  number = [2, 3, 4];

  public ten: number =10;

  one: number =1;

  ngAfterContentChecked(){
    console.log('Checked again')
  }


  ngDoCheck(){
    console.log('Check')
  }

  ngOnInit(){
    this.keyUpEvent();
    // console.log('Ng OnInit');
  }

  ngAfterContentInit(){
    console.log('After checked')
  }

  keyUpEvent(){
    console.log('Key Up!');
  }
  formShow(){
    document.getElementById("login-form").style.display = "block";
  }

  formHide(){
    document.getElementById("login-form").style.display = "none";
  }
}