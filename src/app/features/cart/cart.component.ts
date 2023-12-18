import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Router } from '@angular/router';
import { IProductCart } from 'src/app/core/interfaces/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  itensCart: IProductCart[] = [];
  total = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCart = this.cartService.getCart();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.itensCart.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0);
  }

  removeProductCart(productId: number) {
    this.itensCart = this.itensCart.filter(item => item.id !== productId);
    this.cartService.removeProductCart(productId);
    this.calculateTotal();
  }

  buy() {
    alert("Congratulations, you have completed your purchase!");
    this.cartService.cleanCart();
    this.router.navigate([""]);
  }
}
