import { Component } from '@angular/core';
import { IProduct, products } from 'src/app/core/interfaces/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: IProduct[] | undefined;

  limit: number = 6;

  constructor() { }

    ngOnInit() {
        this.products = products
                        .filter((product) => product.offers?.length > 0);
        this.products = this.products?.filter((product) => product.offers && product.offers[0].discount > 0);
        this.products = this.products?.filter((product) => product.offers?.length > 0)
                        ?.slice(0, this.limit);
    }
}
