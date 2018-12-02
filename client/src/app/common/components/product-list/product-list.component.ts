import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'Services/products.service';
import { IProduct } from 'Interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(private productsService: ProductsService) { }

  // TODO: Implement unsubscribe in onDestroy method.
  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }

  applyFilter(filter) {
    this.productsService.getFilteredProducts(filter)
      .subscribe(products => this.products = products);
  }

  clearFilter(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }
}
