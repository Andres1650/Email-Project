import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked= false;

  email = [
  {
    name: 'Bobby Smith',
    subject: 'Weekly New York Times',
    body: 'Here\'s a sample of what new articles we have for this week'
  },
  {
    name: 'Sarah Nash',
    subject: 'School Board Meeting',
    body: 'Just wondering if you still plan on attending'
  }
  ];

  handleClick(){
    this.clicked=true;
  }
}


