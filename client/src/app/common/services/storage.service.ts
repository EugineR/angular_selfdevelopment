import { Injectable } from '@angular/core';
import { TOKEN_NAME, USER_STORAGE_KEY } from 'Constants/index';
import { IUser } from 'Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setSessionToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getSessionToken(): string {
    return localStorage.getItem(TOKEN_NAME) || '';
  }

  isSessionTokenExist(): boolean {
    return !!localStorage.getItem(TOKEN_NAME);
  }

  removeSessionToken(): void {
    localStorage.removeItem(TOKEN_NAME);
  }

  setCurrentUser(user: IUser): void {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  }

  getCurrentUser(): IUser {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
  }

  removeCurrentUser(): void {
    localStorage.removeItem(USER_STORAGE_KEY);
  }
}
