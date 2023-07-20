import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from 'src/app/types/product';
import { ProductParamsType } from 'src/app/types/productParams';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private _url = 'https://mandalorian-store.netlify.app/api/equipments';
  // private _cartList: ProductType[] = [];

  constructor(private _http: HttpClient) {}

  public getProducts(params?: ProductParamsType): Observable<ProductType[]> {
    return this._http.get<ProductType[]>(this._url, { params });
  }

  // public addToCart(product: ProductType) {
  //   this._cartList.push(product);
  // }

  // public getCartSize() {
  //   return this._cartList.length;
  // }
}
