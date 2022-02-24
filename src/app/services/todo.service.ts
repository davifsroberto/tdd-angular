import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseService } from './base.service';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends BaseService<Todo> {
  constructor() {
    super();
  }
}
