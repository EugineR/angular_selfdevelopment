import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../interfaces/product';
import { RequestService } from '../../../../services/request-service';

@Injectable()
export class ProductListService {

  constructor(private requestService: RequestService) { }

  getProducts(): Observable<IProduct[]> {
    return this.requestService.get('/products');
  }
}
