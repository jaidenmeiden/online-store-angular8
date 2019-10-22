import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

}
