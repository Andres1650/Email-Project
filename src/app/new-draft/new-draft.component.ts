import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-draft',
  templateUrl: './new-draft.component.html',
  styleUrls: ['./new-draft.component.css']
})
export class NewDraftComponent implements OnInit {


  draftForm: FormGroup;
  constructor() { }

  validateQuantity(): void{
    let quantity = this.draftForm.value.quantity.toString();
    quantity =quantity.replace(/D+/g, '');
    this.draftForm.controls.quantity.setValue(+quantity);
  }

  ngOnInit(){
    this.draftForm = new FormGroup({
      'subject': new FormControl(null,Validators.required),
      'receiver': new FormControl(null,[Validators.required,Validators.email]),
      'body': new FormControl(null,Validators.required),
    })
    
    this.draftForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.draftForm.valueChanges.subscribe(
      (status) => console.log(status)
    ); 
  }

}
