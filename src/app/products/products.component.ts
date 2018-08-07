import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Item } from '../models/item';
import { Subcategory } from '../models/subcategory';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: Product[];
  category: string;
  subcategories: Subcategory[] = [];
  items: any[] = [];
  products: Item[] = [];
  filteredProducts: Item[];

  constructor(private postService: ProductService, private route: ActivatedRoute) {
    
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
        this.route.queryParamMap.subscribe(params => {
          this.category = params.get('category');
          
          this.filteredProducts = (this.category) ? 
            this.products.filter(p => p.category == this.category) : 
            this.products;
        })
      },
      error => {
      alert('An unexpected error occured.');
      }
    );
  }


}
