import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'Interfaces/product';
import { RequestService } from './request-service';

@Injectable()
export class ProductsService {

  constructor(private requestService: RequestService) {}

  getProducts(): Observable<IProduct[]> {
    return this.requestService.get('/products');
  }

  getProductById(id: number): Observable<IProduct> {
    return this.requestService.get(`/products/${id}`);
  }
}
