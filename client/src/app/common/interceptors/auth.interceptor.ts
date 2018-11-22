import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from 'Services/storage.service';
import { TOKEN_NAME } from 'Constants/index';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: StorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getSessionToken();
    const cloneRequest = req.clone({
      headers: req.headers.set(TOKEN_NAME, token)
    });

    return next.handle(cloneRequest);
  }
}
