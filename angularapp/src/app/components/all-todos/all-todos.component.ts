import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../models/ITodo';
import { HttpClient } from '@angular/common/http';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css'],
})
export class AllTodosComponent implements OnInit {
  public todos: ITodo[];

  constructor(http: HttpClient, private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe({
      next: (result) => {
        this.todos = result;
      },
      error: (error) => console.error(error),
    });
  }
}
