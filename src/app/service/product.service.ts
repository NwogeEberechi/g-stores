import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://webmppcapstone.blob.core.windows.net/data/itemsdata.json';

  constructor(private http: Http) { }

  getProducts(){
    return this.http.get(this.url)
    .map(response => response.json());
  }
}
