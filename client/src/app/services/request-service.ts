import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private BASE_URL: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  get(url, headers = {}): Observable<any> {
    return this.http.get(`${ this.BASE_URL }${ url }`, headers);
  }

  post(url, body, headers = {}): Observable<any> {
    return this.http.post(`${ this.BASE_URL }${ url }`, body, headers);
  }
}
