import { Injectable } from '@angular/core';
import { User } from './auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private readonly usersKey = 'users';
  private readonly authKey = 'isAuthenticated';

  constructor() {
    this.isAuthenticated = localStorage.getItem(this.authKey) === 'true';
  }

  private getUsers(): User[] {
    const users = localStorage.getItem(this.usersKey);
    return users ? JSON.parse(users) : [];
  }

  private saveUsers(users: User[]): void {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  register(userName: string | null, email: string | null, password: string | null): boolean {
    const users = this.getUsers();
    if (users.find((user) => user.email === email)) {
      return false;
    }
    users.push({ userName, email, password });
    this.saveUsers(users);
    return true;
  }

  login(email: string | null, password: string | null): boolean {
    const users = this.getUsers();
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      this.isAuthenticated = true;
      localStorage.setItem(this.authKey, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.setItem(this.authKey, 'false');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
