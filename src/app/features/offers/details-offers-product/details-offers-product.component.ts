import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { IProduct, IProductCart } from 'src/app/core/interfaces/products';
import { ProductsService } from 'src/app/core/services/products.service';
import { IOffer } from 'src/app/core/interfaces/offers';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-details-offers-product',
  templateUrl: './details-offers-product.component.html',
  styleUrls: ['./details-offers-product.component.css']
})
export class DetailsOffersProductComponent implements OnInit {
  product: IProduct | undefined;
  cartItems: IProductCart[] = [];
  quantity = 1;
  total = 0;
  itens: any;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productsService.getOne(productId);
    this.product?.offers?.[0]?.discount;
    this.cartItems = this.cartService.getCart();
  }

  addToCart() {
    this.notificationService.notify("The product has been added to the cart!");
    const product: IProductCart = {
      ...this.product!, ///// a exclamação foi utilizada para fazer a definição do product
      quantity: this.quantity
    };
    this.cartService.addToCart(product);
  }

  findProductInCart(productId: number): IProductCart | undefined {
    const itensCart = this.cartService.itens;

    for (const item of itensCart) {
      if (item.id === productId) {
        return item;
      }
    }

    return undefined;
  }

  addQuantity(idPoduct: number): void {
    if (!this.product) {
      return;
    }

    const item = this.cartItems.find(item => item.id === idPoduct);
    if (item !== undefined) {
      item.quantity++;
      this.cartService.updateProductInCart(item);
    }

  }

  decreaseQuantity(idPoduct: number) {
    if (!this.product) {
      return;
    }

    const item = this.cartItems.find(item => item.id === idPoduct);
    if (item !== undefined && item.quantity > 1) {
      item.quantity--;
      this.cartService.updateProductInCart(item);
    }
  }
}
