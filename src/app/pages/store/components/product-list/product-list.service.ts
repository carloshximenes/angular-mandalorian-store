import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderType } from 'src/app/types/order';
import { ProductType } from 'src/app/types/product';
import { ProductParamsType } from 'src/app/types/productParams';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private _url = 'https://mandalorian-store.netlify.app/api';
  // private _cartList: ProductType[] = [];

  constructor(private _http: HttpClient) {}

  public getProducts(params?: ProductParamsType): Observable<ProductType[]> {
    return this._http.get<ProductType[]>(`${this._url}/equipments`, { params });
  }

  public orderProducts(params?: OrderType): Observable<OrderType> {
    return this._http.post<OrderType>(`${this._url}/orders`, params);
  }
}
