import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from '../models/ITodo';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ErrorService } from './error.service';

const httpGetAllUrl = 'https://localhost:7192/Todo/Get/';
const httpDeleteUrl = 'https://localhost:7192/Todo/Delete/';
const httpUpdateUrl = 'https://localhost:7192/Todo/Update/';
const httpPostUrl = 'https://localhost:7192/Todo/Post/';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(httpGetAllUrl).pipe(
      tap((res) => {
        return res;
      }),
      catchError(this.errorHandler.bind(this))
    );
  }

  create(todo: ITodo) {
    return this.http.post(httpPostUrl, todo).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => console.error(error),
    });
  }

  delete(id: string): void {
    this.http.delete(httpDeleteUrl + id).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => console.error(error),
    });
  }

  update(todo: ITodo): void {
    this.http.put(httpUpdateUrl + todo.id, todo).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => console.error(error),
    });
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
