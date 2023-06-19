import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ITodo } from '../../models/ITodo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css'],
})
export class SingleTodoComponent implements OnInit {
  @Input() todo: ITodo;
  @ViewChild('descriptionElement', { static: false })
  descriptionElementRef: ElementRef;

  constructor(public todoService: TodoService) {}
  ngOnInit(): void {}

  saveDescription(todo: ITodo) {
    if (todo != undefined) {
      // update current todo object
      todo.description = this.descriptionElementRef.nativeElement.textContent;

      this.todoService.update(todo);
      location.reload();
    } else console.error('id is undefined');
  }

  deleteTodo(id?: string): void {
    if (id != undefined) {
      this.todoService.delete(id);
      location.reload();
    } else console.error('id is undefined');
  }

  toggleCheckbox(todo: ITodo): void {
    if (todo != undefined) {
      this.todoService.update(todo);
      location.reload();
    } else console.error('id is undefined');
  }
}
