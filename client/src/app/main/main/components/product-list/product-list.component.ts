import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { IProduct } from '../../../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(private productListService: ProductListService) { }

  ngOnInit() {
    this.productListService.getProducts().subscribe(products => this.products = products)
  }

}
