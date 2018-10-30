import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneRequest = req.clone({
      headers: req.headers.set('session-token', this.tokenService.getToken())
    });

    return next.handle(cloneRequest)
      // .pipe(
      // map(event => {
      //   if (event instanceof HttpResponse) {
      //     debugger
      //   }
      //   return event;
      // }));
  }
}
