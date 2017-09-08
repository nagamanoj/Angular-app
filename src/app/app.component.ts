import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})

export class AppComponent implements OnInit {
  title: string = 'First Angular App';
  tasks: Task[];
  selectedTask: Task;
  txtName: string;

  constructor(private taskService: TaskService) { }

  onSelect(task:Task):void{
    this.selectedTask = task;
    //console.log(task.name);
  }

  ngOnInit(): void {
    this.getTasks();
  }
  
  // adding new task to array
  addNewTask(): void{
    this.tasks.push({name: this.txtName});
    //console.log(this.txtName);
  }

  //getting the tasks from the task service.
  getTasks(): void {
    this.tasks = this.taskService.getTasks();
  }
}

