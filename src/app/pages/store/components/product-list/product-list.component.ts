import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { ProductType } from 'src/app/types/product';
import { take } from 'rxjs';
import { ProductParamsType } from 'src/app/types/productParams';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: ProductType[] = [];
  public cartList: ProductType[] = [];

  constructor(private _service: ProductListService) {}

  ngOnInit() {
    this.getProductsBy();
  }

  public getProductsBy(params?: ProductParamsType) {
    this._service
      .getProducts(params)
      .pipe(take(1))
      .subscribe((response) => {
        this.products = response;
      });
  }

  public addToCart(product: ProductType) {
    this.cartList.push(product);
  }

  public getSizeCart() {
    return this.cartList.length;
  }
}
