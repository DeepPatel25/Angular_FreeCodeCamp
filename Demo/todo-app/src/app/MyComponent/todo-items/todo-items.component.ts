import { TodoItemDisplayComponent } from './../todo-item-display/todo-item-display.component';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../../../model/Todo';
import { AddTodoItemComponent } from '../add-todo-item/add-todo-item.component';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    TodoItemDisplayComponent,
    AddTodoItemComponent,
  ],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css',
})
export class TodoItemsComponent {
  todos: Todo[];
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos') ?? '[]');
  }

  addTodoItemInLS(todo: Todo) {
    this.todos.push(todo);
    console.log('Item added successfully');
    this.updateLocalStorage();
  }

  deleteTodoItemFromLS(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log('Successfully deleted');
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
