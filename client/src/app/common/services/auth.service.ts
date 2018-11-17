import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { TokenService } from './token.service';
import { TOKEN_NAME } from 'Constants/index';
import { RequestService } from './request-service';
import { IUser } from 'Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: IUser;

  constructor(private requestService: RequestService, private tokenService: TokenService) {}

  public login(user: FormGroup) {
    return this.requestService.post('/login',
      user, { observe: 'response' })
      .pipe(
        tap(  (res: HttpResponse<any>) => {
          this.user = res.body;
          const sessionToken = res.headers.get(TOKEN_NAME);
          this.tokenService.setToken(sessionToken);
        })
      );
  }

  public logout() {
    return this.requestService.post('/logout',
      { ...this.user },
      { responseType: 'text', observe: 'response' })
      .pipe(
        tap(() => {
          this.tokenService.removeToken();
        })
      );
  }


  public getCurrentUser() {
    return { ...this.user };
  }
}
