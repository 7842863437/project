import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforngif',
  templateUrl: './ngforngif.component.html',
  styleUrls: ['./ngforngif.component.css']
})
export class NgforngifComponent implements OnInit {

  constructor() { }
task;
tasks=[
  {val:'bill payments', status:false},
  {val:'emi', status:false},
];
  ngOnInit(): void {
  }
addtask(){
this.tasks.push({val:this.task,status:false})
}
deletetask(id){
this.tasks.splice(id,1);
}
}
