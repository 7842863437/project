import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  first:any = [{}];
  last:any = [{}];
  age:any = [{}];
  email:any = [{}];
  addfirst(task){
    this.first.push({val:task,status:false})
  }
  addlast(task){
    this.last.push({val:task,status:false})
  }
  addage(task){
    this.age.push({val:task,status:false})
  }
  addemail(task){
    this.email.push({val:task,status:false})
  }
  getTaskList(){
    return this.first;
    return this.last;
    return this.age;
    return this.email;
  }
  deleteTask(id){
    this.first.splice(id,1);
    this.last.splice(id,1);
    this.age.splice(id,1);
    this.email.splice(id,1);
  }
}

