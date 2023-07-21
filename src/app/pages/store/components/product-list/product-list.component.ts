import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { ProductType } from 'src/app/types/product';
import { take } from 'rxjs';
import { ProductParamsType } from 'src/app/types/productParams';
import { OrderType } from 'src/app/types/order';

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

  public orderNow() {
    const order: OrderType = {
      name: 'Carlos',
      deliveryAddress: 'Ada Tech',
      items: [],
    };

    this.cartList.forEach((product) => {
      const index = order.items.findIndex(
        (item) => item.productId === product.id
      );
      if (index >= 0) {
        order.items[index].quantity += 1;
      } else {
        order.items.push({
          productId: product.id,
          quantity: 1,
        });
      }
    });

    this._service
      .orderProducts(order)
      .pipe(take(1))
      .subscribe((response) => {
        if (response) {
          this.cartList = [];
          alert('Pedido realizado com sucesso!');
        } else {
          alert('Erro ao realizar pedido!');
        }
      });
  }
}
