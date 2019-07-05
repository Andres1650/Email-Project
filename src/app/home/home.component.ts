import { Component, OnInit, Directive } from '@angular/core';


@Directive({
  selector: 'my-directive',
})

export class MyDirective {
  
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}


