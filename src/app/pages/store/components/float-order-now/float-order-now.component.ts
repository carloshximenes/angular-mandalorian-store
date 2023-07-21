import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-float-order-now',
  templateUrl: './float-order-now.component.html',
  styleUrls: ['./float-order-now.component.scss'],
})
export class FloatOrderNowComponent {
  @Input() showComponent: boolean = false;
  @Output() orderNow: EventEmitter<void> = new EventEmitter();
  constructor() {}

  public emitOrder() {
    this.orderNow.emit();
  }
}
