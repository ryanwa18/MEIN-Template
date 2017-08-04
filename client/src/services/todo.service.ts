import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

import { Todo } from '../models/todo';


@Injectable()
export class TodoService {
   private tasksUrl = 'http://localhost:3000/tasks';  // URL to web API
   private headers = new Headers({ 'Content-Type': 'application/json' });
   private options = new RequestOptions({ headers: this.headers });

   constructor (private http: Http) { }

   /*
   * Returns the list of tasks from the http request
   * as an obserable of type Todo[].
   */
   getTasks(): Observable<Todo[]> {
    return this.http.get(`${this.tasksUrl}`)
                  .map(response => {return response.json()});
   }

   /*
   * Adds a task to the database through an http post.
   */
   addTask(name: string): Observable<Todo> {
     return this.http.post(`${this.tasksUrl}`, {name: name}, this.headers)
      .map(response => {return response.json()});
   }
}
