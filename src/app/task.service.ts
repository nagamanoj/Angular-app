import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-task';

@Injectable()
export class TaskService{
    getTasks(): Task[]{
        return TASKS;
    }

}