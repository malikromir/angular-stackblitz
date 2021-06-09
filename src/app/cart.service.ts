import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

export interface Database {
  type: string;
  price: number;
}

@Injectable()
export class CartService {
  items: Product[] = [];
  shippingDB!: Database;

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }>(
      '/assets/shipping.json'
    );
  }
}
