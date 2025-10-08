import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  public cart: any[] = [];
  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.cart = JSON.parse(<string>localStorage.getItem('cart')) || [];
      if(!this.cart){
        localStorage.setItem('cart', JSON.stringify([]));
        this.cart = [];
      }
    } else {
      // SSR fallback: pas de localStorage
      this.cart = [];
    }
    console.log(this.cart);
  }



  getProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  deleteProduct(productId: number) {
    return this.http.delete(`https://fakestoreapi.com/products/${productId}`);
  }

  addToCart(product: any){
    this.cart.push(product);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    console.log(this.cart);
    return this.cart;
  }
}
