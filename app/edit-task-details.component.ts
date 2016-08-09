import {Component} from 'angular2/core';
import {Task} from './task.model';



@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
    <div class="task-form">
      <h3>Edit Description: {{ task.description }}</h3>
      <input [(ngModel)]="task.description"/>
    </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
