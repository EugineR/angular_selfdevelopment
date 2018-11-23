import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from 'app/common/components/header/header.component';
import { ProductListComponent } from 'app/common/components/product-list/product-list.component';
import { ProductsService } from 'app/common/services/products.service';
import { ProductDetailsComponent } from 'app/common/components/product-details/product-details.component';
import { FiltersComponent } from 'app/common/components/filters/filters.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FiltersComponent
  ],
  providers: [
    ProductsService
  ]
})
export class MainModule {
}
