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

  updateInventoryQuantity(newQuantity: number, productId: number){
    let productToUpdate = this.getOne(productId);
    if(productToUpdate) {

      // Copying the products array
      const updatedProducts = [...this.products];
      // Updating the inventory quantity
      productToUpdate!.inventoryQuantity = newQuantity;

      // Getting the position of the product to be updated on the array
      const oldProductIndex = updatedProducts.findIndex(p => p.id === productId);
      updatedProducts[oldProductIndex] = productToUpdate!;

      // Replacing the old array with the new and updated product list
      this.products = updatedProducts;
    }
  }
}
