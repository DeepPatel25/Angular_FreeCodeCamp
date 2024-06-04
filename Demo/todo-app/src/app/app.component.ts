import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItemsComponent } from './MyComponent/todo-items/todo-items.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoItemsComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
