import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { StorageService } from './storage.service';
import { TOKEN_NAME } from 'Constants/index';
import { RequestService } from './request-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private requestService: RequestService, private storageService: StorageService) {}

  public login(user: FormGroup) {
    return this.requestService.post('/login',
      user, { observe: 'response' })
      .pipe(
        tap(  (res: HttpResponse<any>) => {
          const sessionToken = res.headers.get(TOKEN_NAME);

          this.storageService.setCurrentUser(res.body);
          this.storageService.setSessionToken(sessionToken);
        })
      );
  }

  public logout() {
    const user = this.storageService.getCurrentUser();

    return this.requestService.post('/logout',
      { ...user },
      { responseType: 'text', observe: 'response' })
      .pipe(
        tap(() => {
          this.storageService.removeSessionToken();
          this.storageService.removeCurrentUser();
        })
      );
  }
}
