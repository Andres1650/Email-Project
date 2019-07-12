import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  validateQuantity(): void{
    let quantity = this.loginForm.value.quantity.toString();
    quantity =quantity.replace(/D+/g, '');
    this.loginForm.controls.quantity.setValue(+quantity);
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
    })
    
    this.loginForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.loginForm.valueChanges.subscribe(
      (status) => console.log(status)
    ); 
  }

  
  
  
  onSubmit(){
    console.log(this.loginForm)
    }
  
  onReset(){
    this.loginForm.reset();
    }
}
