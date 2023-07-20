import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-float-cart',
  templateUrl: './float-cart.component.html',
  styleUrls: ['./float-cart.component.scss'],
})
export class FloatCartComponent {
  @Input() size: number = 0;
}
