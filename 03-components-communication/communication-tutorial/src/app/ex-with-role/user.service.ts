import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: BehaviorSubject<User> = new BehaviorSubject({
    name: 'Pigletshvily Chaitovski',
    role: 'user'
  } as any);
}
