import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/core/interfaces/products';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-offers-products',
  templateUrl: './offers-products.component.html',
  styleUrls: ['./offers-products.component.css']
})
export class OffersProductsComponent implements OnInit {

  products: IProduct[] | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const products = this.productsService.getAllOffers();
    this.route.queryParamMap.subscribe(params => {
      const description = params.get("description")?.toLowerCase();

      if (description) {
        this.products = products.filter(product => product.description.toLowerCase().includes(description));
        return;
      }

      this.products = products;
    })
  }
}
