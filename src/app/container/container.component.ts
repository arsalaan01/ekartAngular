import { ProductListComponent } from './product-list/product-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  searchText: string = '';

  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent;

  constructor() {}

  onSearchTextChanged(value: string) {
    this.searchText = value;
  }
}
