import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  sender: string =  "REAL Nigerian Prince"
  header: string = "Free Inheritance"
  body: string = "I'm a Nigerian Prince who has chosen you to inherit my wealth as a prince, and to be able to send you this money I am going to need some of your personal information to make a wire transfer. Act now before it is too late!  You can message me all the information through this email, trust me its totally safe. XD"

  constructor() { }

  ngOnInit() {
  }

}
