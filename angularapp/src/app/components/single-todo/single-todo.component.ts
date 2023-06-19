import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../../models/ITodo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {
  @Input() todo: ITodo;

  constructor(public todoService: TodoService) {}

  ngOnInit(): void { }

  deleteTodo(id?: string): void {
    if (id != undefined) {
      this.todoService.deleteTodo(id);
      location.reload();
    } else
      console.error("id is undefined");
  }

  toggleCheckbox(todo: ITodo): void {
    if (todo != undefined) {
      this.todoService.toggleCheckbox(todo);
      location.reload();
    } else
      console.error("id is undefined");
  }
}
