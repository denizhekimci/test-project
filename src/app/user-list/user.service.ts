import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from "./users.model";

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get(
        'https://jsonplaceholder.typicode.com/users'
      )
      .pipe(map((users) => users || []));
  }
}
