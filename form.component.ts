import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }  
  studentForm = new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
    age:new FormControl(),
    location:new FormControl()
  })
  save(){
console.log(this.studentForm);
  }
}
