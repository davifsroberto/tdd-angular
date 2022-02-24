import { Injectable } from '@angular/core';

import { BaseService } from './base.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  constructor() {
    super();
  }
}
