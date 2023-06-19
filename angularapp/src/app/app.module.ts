import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { AllTodosComponent } from './components/all-todos/all-todos.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleTodoComponent,
    AllTodosComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
