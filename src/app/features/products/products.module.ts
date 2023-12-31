import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { DetailsProductComponent } from './product-details/products-details.component';


@NgModule({
  declarations: [
    ProductsComponent,
    DetailsProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
