import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../model/Todo';

@Component({
  selector: 'app-todo-item-display',
  standalone: true,
  imports: [],
  templateUrl: './todo-item-display.component.html',
  styleUrl: './todo-item-display.component.css'
})
export class TodoItemDisplayComponent {
  @Input() todo: Todo;
  @Output() deleteItem: EventEmitter<Todo> = new EventEmitter();

  constructor(todo: Todo) {
    this.todo = todo;
  }

  deleteTodoItem(todo: Todo) {
    this.deleteItem.emit(todo);
  }
}
