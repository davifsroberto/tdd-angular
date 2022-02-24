import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
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
