import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  todos: Todo[] = [
    new Todo('Get to work'),
    new Todo('Pick up groceries'),
    new Todo('Go home'),
    new Todo('Fall asleep'),
  ];

  constructor() {}

  getAllTodos() {
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.unshift(todo);
  }
  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }
  deleteTodo(index: number) {
    let newTodos = this.todos.splice(index, 1);
  }
}
