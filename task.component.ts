import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }
  num1=null;
  num2=null;
  res=null;
  ngOnInit(): void {
  }
  add(){
    this.res=parseInt(this.num1)+parseInt(this.num2);
  }
  sub(){
    this.res=parseInt(this.num1)-parseInt(this.num2);
  }

}
