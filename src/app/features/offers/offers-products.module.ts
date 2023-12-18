import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { OffersProductsComponent } from './offers-products.component';
import { DetailsOffersProductComponent } from './details-offers-product/details-offers-product.component';
import { OffersProductsRoutingModule } from './offers-products-routing.module';


@NgModule({
  declarations: [
    OffersProductsComponent,
    DetailsOffersProductComponent
  ],
  imports: [
    CommonModule,
    OffersProductsRoutingModule,
    FormsModule
  ]
})
export class OffersProductsModule { }
