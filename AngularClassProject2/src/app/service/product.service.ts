import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

import {Product}  from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL: string = environment.baseUrl; 

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    console.log(this.apiURL + 'products');
    return this.httpClient.get(this.apiURL + 'products');
  }

  public getProduct(productId: number) {
    console.log(this.apiURL + 'product/' + productId);
    return this.httpClient.get(this.apiURL + 'product/' + productId);
  }

  public getProductsByDesc(productDesc: string) {
    console.log(this.apiURL + 'product/productDescriptionEnglish/' + encodeURI(productDesc));
    return this.httpClient.get(this.apiURL + 'product/productDescriptionEnglish/' + encodeURI(productDesc));
  }


  public getProductsByIdDesc(productId: number, productDesc: string) {
    // tslint:disable-next-line: max-line-length
    console.log(this.apiURL + 'product/' + productId + '/productIdAndProductDescriptionEnglish/' + encodeURI(productDesc));
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get(this.apiURL + 'product/' + productId + '/productIdAndProductDescriptionEnglish/' + encodeURI(productDesc));
  }

  public getAvailableProducts() {
    return this.httpClient.get(this.apiURL + 'availableProducts');
  }

  public add(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.apiURL + 'product/create', product);
  }
}
