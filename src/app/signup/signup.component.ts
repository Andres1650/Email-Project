import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor() { }

  validateQuantity(): void{
    let quantity = this.signupForm.value.quantity.toString();
    quantity =quantity.replace(/D+/g, '');
    this.signupForm.controls.quantity.setValue(+quantity);
  }

  ngOnInit(){
    this.signupForm = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,Validators.required),
      'date': new FormControl(null,Validators.required),
    })
    
    this.signupForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.signupForm.valueChanges.subscribe(
      (status) => console.log(status)
    ); 
  }


}
