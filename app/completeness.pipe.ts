import { Pipe, PipeTransform } from 'angular2/core';
import { Task } from './task.model';

@Pipe({
  name: "completeness",
  pure: false
})
export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredCompleteness = args[0];
    var output: Task[] = [];
    if(desiredCompleteness === "notDone") {
      for (var i = 0; i < input.length; i++)
      if (input[i].done === false) {
        output.push(input[i]);
      }
    } else if(desiredCompleteness === "isDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
    } else {
      output = input;
    }
    return output;
  }
}
