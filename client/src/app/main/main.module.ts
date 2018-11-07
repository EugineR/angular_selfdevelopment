import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/components/header/header.component';
import { ProductListComponent } from './main/components/product-list/product-list.component';
import { ProductListService } from './main/components/product-list/product-list.service';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    ProductListComponent
  ],
  providers: [
    ProductListService
  ]
})
export class MainModule {
}
