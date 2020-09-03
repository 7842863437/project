import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
data=[{
  id:'123',
  name:'hari',
  city:'hyderabad',
  age:26
},
{
  id:'456',
  name:'khaja',
  city:'pune',
  age:30
},
{
  id:'789',
  name:'kiran',
  city:'chennai',
  age:27
}]
}
