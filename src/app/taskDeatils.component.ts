import { Component, Input } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'task-details',
  templateUrl: './taskDetails.component.html',
  styleUrls: ['./taskDetails.component.css']
})

export class TaskDetails{

  @Input() task: Task;

}
