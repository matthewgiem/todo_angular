import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';

@Component({
  selector: "my-app",
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <task-list
        [taskList]="tasks"
        (onTaskSelect)="taskWasSelected($event)">
      </task-list>
    </div>
    `
})
export class AppComponent  {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Create To-Do List app.", 0),
      new Task("Rewatch all the Lord of the Rings movies.", 1),
      new Task("Learn Kung Fu.", 2),
      new Task("Do the laundry.", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent', clickedTask);
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number)  {
  }
}
