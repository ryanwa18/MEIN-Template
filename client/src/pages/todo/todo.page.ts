import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'todo',
  templateUrl: 'todo.html',
  providers: [TodoService]
})
export class TodoPage implements OnInit {

  private todos: Todo[];

  constructor(public navCtrl: NavController, private todoService: TodoService) { }

  /*
  * Initializes the page with the list of tasks.
  */
  ngOnInit() {
    this.getTasks();
  }

  /*
  * Gets the tasks by making a server request and
  * stores the data into an array.
  */
  getTasks() {
    this.todoService.getTasks()
      .subscribe(todos => this.todos = todos);
  }

  /*
  * Adds a task by making a server post.
  */
  addTask(name: string) {
    this.todoService.addTask(name).subscribe(todos => this.getTasks());
  }
}
