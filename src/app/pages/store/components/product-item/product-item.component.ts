import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductType } from 'src/app/types/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product!: ProductType;
  @Output() cartAction: EventEmitter<ProductType> =
    new EventEmitter<ProductType>();

  addToCart() {
    if (!this.product.isAvailable) return;
    this.cartAction.emit();
  }
}
