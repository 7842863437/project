import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
  }
  Registartionform = this.fb.group({
    fullname : ['',Validators.required],
    email : ['',Validators.required,],
    age : ['',Validators.required],
    location : ['',Validators.required]
  })
  reg(){
    console.log(this.Registartionform.value);
  }
//set(){
 //this.Registartionform.setValue({
  // fullname:'srihari',
  //  email:'hari@gmail.com',
  //  age:26,
 //  location:'hyd'
 // });
  patchValue(){
    this.Registartionform.patchValue({
      fullname:'srihari',
    email:'hari@gmail.com'
    })
  }
}
