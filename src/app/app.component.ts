import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todo_list: any[];
  newTask: any;
  title = 'To-Do List';
  totalTasks;
  constructor(){
    this.todo_list = [];
    this.newTask = {
      _id: 0,
      name: '',
      category:'',
      duedate: Date
    };
    this.totalTasks = 0;
  }
  ngOnInit(): void {};
  addTask():void {
    console.log(this.newTask);
    this.newTask._id=this.totalTasks;
    this.todo_list.push(this.newTask);
    this.totalTasks+=1;
  }
}
