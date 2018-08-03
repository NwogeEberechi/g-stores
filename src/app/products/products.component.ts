import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from '../models/product';
import { Item } from '../models/item';
import { Subcategory } from '../models/subcategory';

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


  constructor(private http: Http) {
    http.get('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json')
    .subscribe(response => {
      this.data = response.json();
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
      console.log(this.products);
    });
   }

  ngOnInit() {
  }

}
