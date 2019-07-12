import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-form-event',
  template: `
    <button (click)="login-open()">Login</button>
    {{clickMessage}}`
})


export class OpenFormEventComponent implements OnInit {

  constructor() { 
    let btn = document.getElementById("coolbutton");
    btn.addEventListener("click", (e:Event) => document.getElementById("myForm").style.display = "block");
  }

  ngOnInit() {
  }

}
