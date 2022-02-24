import { Injectable } from '@angular/core';

import { of } from 'rxjs/internal/observable/of';

import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  constructor() {}

  GetList() {
    return of([]);
  }

  GetById(id: number) {
    return of({});
  }
}
