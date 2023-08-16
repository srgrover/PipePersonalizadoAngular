import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
    { name: "Jack", surname: "Sparrow", email: "captainJackSparrow@pirates.com", age: 28 },
    { name: "Will", surname: "Turner", email: "willturner@pirates.com", age: 21 },
    { name: "Davy", surname: "Jones", email: "davyjones@pirates.com", age: 110 },
    { name: "Hector", surname: "Barbossa", email: "hectorBarbossa@pirates.com", age: 58 },
    { name: "Elizabeth", surname: "Swann", email: "elizabethswann@pirates.com", age: 20 }
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }
}
