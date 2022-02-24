import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a Get List Method', () => {
    expect(service.GetList).toBeTruthy();
  });

  it('should have a Get by Id Method', () => {
    expect(service.GetById(1)).toBeTruthy();
  });
});
