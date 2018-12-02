import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'Interfaces/product';
import { RequestService } from './request-service';

@Injectable()
export class CategoryService {

  constructor(private requestService: RequestService) {}

  getCategories(): Observable<IProduct[]> {
    return this.requestService.get('/categories');
  }
}
