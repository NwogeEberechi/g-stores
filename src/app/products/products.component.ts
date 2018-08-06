import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Item } from '../models/item';
import { Subcategory } from '../models/subcategory';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: Product[];
  subcategories: Subcategory[] = [];
  items: any[] = [];
  products: Item[] = [];

  constructor(private postService: ProductService) {
    
   }

  ngOnInit() {
    this.postService.getProducts()
    .subscribe(
      data => {
        this.data = data;
        this.data.forEach((category, index) => {
          this.subcategories.push(category.subcategories);
        });
        this.subcategories.forEach((item) => {
          for (let key in item) {
            this.items.push(item[key]);
          }
        });
        this.items.forEach((item) => {
          for (let key in item.items) {
            this.products.push(item.items[key]);
          }
        });
      },
      error => {
      alert('An unexpected error occured.');
      }
    );
  }


}
