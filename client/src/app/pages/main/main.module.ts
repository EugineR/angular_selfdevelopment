import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from 'Components/header/header.component';
import { ProductListComponent } from 'Components/product-list/product-list.component';
import { ProductsService } from 'Services/products.service';
import { ProductDetailsComponent } from 'Components/product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  providers: [
    ProductsService
  ]
})
export class MainModule {
}
