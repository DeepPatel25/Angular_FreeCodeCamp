import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemDisplayComponent } from './todo-item-display.component';

describe('TodoItemDisplayComponent', () => {
  let component: TodoItemDisplayComponent;
  let fixture: ComponentFixture<TodoItemDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
