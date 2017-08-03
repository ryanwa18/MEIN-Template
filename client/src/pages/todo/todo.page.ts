import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActivatedRoute } from '@angular/router';

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

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.todoService.getTasks()
      .subscribe(todos => this.todos = todos);
  }

  addTask(name: string) {
    this.todoService.addTask(name);
  }
}
