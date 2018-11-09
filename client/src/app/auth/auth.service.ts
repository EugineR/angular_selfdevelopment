import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { TokenService } from '../token/token.service';
import { TOKEN_NAME } from '../constants';
import { RequestService } from '../services/request-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthorized: boolean = false;

  isAuthorized(): boolean {
    return this._isAuthorized;
  }

  constructor(private requestService: RequestService, private tokenService: TokenService) {
  }

  login(user: FormGroup) {
    return this.requestService.post('/login',
      user,{ observe: 'response' })
      .pipe(
        tap((res: HttpResponse<any>) => {
          this.tokenService.setToken(res.headers.get(TOKEN_NAME));
          this._isAuthorized = true;
        })
      );
  }

  // TODO: Change body of request
  logout() {
    return this.requestService.post('/logout',
      { login: 'frank' },
      { responseType: 'text', observe: 'response' })
      .pipe(
        tap(() => {
          this.tokenService.removeToken();
          this._isAuthorized = false;
        })
      );
  }
}
