import { Injectable } from '@angular/core';
import { TOKEN_NAME } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME) || '';
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  removeToken(): void {
    localStorage.removeItem(TOKEN_NAME);
  }

}
