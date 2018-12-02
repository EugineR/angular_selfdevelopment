import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'Interfaces/product';
import { RequestService } from './request-service';

@Injectable()
export class ProductsService {

  constructor(private requestService: RequestService) {}

  public getProducts(): Observable<IProduct[]> {
    return this.requestService.get('/products');
  }

  public getProductById(id: number): Observable<IProduct> {
    return this.requestService.get(`/products/${id}`);
  }

  public getFilteredProducts(filter): Observable<IProduct[]> {
    const url = this.mapFilterToURL(filter);
    return this.requestService.get(url);
  }

  // TODO: Implement method.
  private mapFilterToURL(filter): string {
    return '';
  }
}
