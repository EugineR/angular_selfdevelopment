import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  authorize(user: FormGroup) {
    return this.http.post(this.baseURL + '/login', user, { responseType: 'text', observe: 'response'});
  }

  isAuthorized() {
    return this.http.get(this.baseURL + '/', { responseType: 'text', observe: 'response' })
      .subscribe(res => {
        debugger
      }, error => {
        debugger
      });
  }
}
