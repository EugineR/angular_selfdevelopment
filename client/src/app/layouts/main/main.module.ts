import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from 'app/common/components/header/header.component';
import { ProductListComponent } from 'app/common/components/product-list/product-list.component';
import { ProductsService } from 'app/common/services/products.service';
import { ProductDetailsComponent } from 'app/common/components/product-details/product-details.component';
import { FiltersComponent } from 'app/common/components/filters/filters.component';
import { CustomDropdownComponent } from 'Components/custom-dropdown/custom-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from 'Services/category.service';
import { CustomRadioComponent } from 'Components/custom-radio/custom-radio.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FiltersComponent,
    CustomDropdownComponent,
    CustomRadioComponent
  ],
  providers: [
    ProductsService,
    CategoryService
  ]
})
export class MainModule {
}
