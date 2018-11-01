import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL: string = 'http://localhost:3000/api';
  private _isAuthorized: boolean = false;

  isAuthorized(): boolean {
    return this._isAuthorized;
  }

  constructor(private http: HttpClient) {}

  login(user: FormGroup): Observable<HttpResponse<any>> {
    return this.http.post(`${ this.baseURL }/login`, user, { responseType: 'text', observe: 'response' })
      .pipe(
        map(res => {
          this._isAuthorized = true;
          return res;
        })
      );
  }

  logout(user: FormGroup): Observable<HttpResponse<any>> {
    return this.http.post(`${ this.baseURL }/logout`, user, { responseType: 'text', observe: 'response' })
      .pipe(
        map(res => {
          this._isAuthorized = false;
          return res;
        })
      );
  }
}