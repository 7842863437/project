import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
y="childdata";
  ngOnInit(): void {
  }
@Input() x;
@Output() abc= new EventEmitter();
send(){
this.abc.emit(this.y);
}
}
