import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getToken(): string {
    return localStorage.getItem('session-token') || '';
  }

  setToken(token: string): void {
    localStorage.setItem('session-token', token);
  }
}
