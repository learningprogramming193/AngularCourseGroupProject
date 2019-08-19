import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  public getProducts (){
    return this.httpClient.get(this.apiUrl + 'products');
  }

  public getAvailableProducts (){
    return this.httpClient.get(this.apiUrl + 'availableProducts');
  }

  public add(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.apiUrl + 'product/create', product);
  }
}
