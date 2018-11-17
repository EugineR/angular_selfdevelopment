import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'Services/products.service';
import { IProduct } from 'Interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: IProduct | {} = {};
  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
      this.productsService.getProductById(id)
      .subscribe(product => { this.product = product; });
  }

}
