import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../../model/Todo';

@Component({
  selector: 'app-add-todo-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo-item.component.html',
  styleUrl: './add-todo-item.component.css',
})
export class AddTodoItemComponent {
  todo: Todo;
  @Output() addTodoItem: EventEmitter<Todo> = new EventEmitter();

  constructor(todo: Todo) {
    this.todo = new Todo();
  }

  addTodo() {
    this.addTodoItem.emit(this.todo);
  }
}
