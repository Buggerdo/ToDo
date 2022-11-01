import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from './ToDo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List';
  todo: ToDo[] = [
    { task: 'Learn Angular', completed: false },
    { task: 'Learn TypeScript', completed: false },
    { task: 'Learn JavaScript', completed: true },
    { task: 'Learn HTML', completed: false },
    { task: 'Learn CSS', completed: false },
  ];


  addTask(formParam: NgForm): void{
    if(formParam.value.task !== ''){
      let newTask: ToDo = {
        task: formParam.value.task,
        completed: false
      };
      this.todo.push(newTask);    
  }
}

completeTask(index: number): void{
    this.todo[index].completed = true;
  }
}
