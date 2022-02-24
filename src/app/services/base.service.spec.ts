import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';
import { Todo } from '../model/todo.model';

describe('BaseService', () => {
  let service: BaseService<Todo>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
