import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  form = new FormGroup({
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  get description() {
    return this.form.controls.description as FormControl;
  }

  submit(): void {
    this.todoService.create({
      description: this.description.value,
      ifDone: false,
      date: new Date(),
    });
    location.reload();
  }
}
