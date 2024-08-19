import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  products: Product[] = [
    { id: 1, name: 'ProductOne', description: 'descriptionOne', price: 1000 },
    { id: 2, name: 'ProductTwo', description: 'descriptionTwo', price: 2000 },
    { id: 3, name: 'ProductThree', description: 'descriptionThree', price: 3000 },
    { id: 4, name: 'ProductFour', description: 'descriptionFour', price: 4000 }
  ]
  constructor() { }


  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    return { products: this.products }
  }

}
