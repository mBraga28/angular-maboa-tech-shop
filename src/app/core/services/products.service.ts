import { Injectable } from '@angular/core';
import { IProduct, products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[] = products;

  constructor() { }

  getAll() {
    return this.products;
  }

  getAllOffers() {
    return this.products?.filter((product) => product.offers && product.offers[0].discount > 0);
  }

  getAllNoOffers() {
    return this.products?.filter((product) => product.offers && product.offers[0].discount < 10);
  }

  getOne(productId: number) {
    return this.products.find(product => product.id === productId);
  }
}
