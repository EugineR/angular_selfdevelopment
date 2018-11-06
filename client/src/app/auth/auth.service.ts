import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TokenService } from '../token/token.service';
import { TOKEN_NAME } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL: string = 'http://localhost:3000/api';
  private _isAuthorized: boolean = false;

  isAuthorized(): boolean {
    return this._isAuthorized;
  }

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(user: FormGroup): Observable<HttpResponse<any>> {
    return this.http.post(`${ this.BASE_URL }/login`, user, { responseType: 'text', observe: 'response' })
      .pipe(
        tap((res) => {
          this.tokenService.setToken(res.headers.get(TOKEN_NAME));
          this._isAuthorized = true;
        })
      );
  }
  // TODO: Change body of request
  logout(): Observable<HttpResponse<any>> {
    return this.http.post(`${ this.BASE_URL }/logout`, {login: 'frank'}, { responseType: 'text', observe: 'response' })
      .pipe(
        tap(() => {
          this.tokenService.removeToken();
          this._isAuthorized = false;
        })
      );
  }
}
