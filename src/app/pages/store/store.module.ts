import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FilterComponent } from './components/filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FloatCartComponent } from './components/float-cart/float-cart.component';

@NgModule({
  declarations: [
    StoreComponent,
    ProductListComponent,
    ProductItemComponent,
    FilterComponent,
    FloatCartComponent,
  ],
  exports: [StoreComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
})
export class StoreModule {}
