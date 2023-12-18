import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersProductsComponent } from './offers-products.component';
import { DetailsOffersProductComponent } from './details-offers-product/details-offers-product.component';

const routes: Routes = [
  { path: '', component: OffersProductsComponent },
  { path:':id', component: DetailsOffersProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersProductsRoutingModule { }
