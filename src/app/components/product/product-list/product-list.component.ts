import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../models/product.model';
import { Router } from '@angular/router';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { SearchService } from '../../../service/search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = of([]);
  filteredProducts$: Observable<Product[]> = of([]);
  productNotFound: boolean = false;


  constructor(
    private productService: ProductService,
    private router: Router,
    private searchService: SearchService) {

  }
 

  ngOnInit(): void {   
    this.searchService.clearSearchItem();   

    this.products$ = this.productService.getProducts();
      
    this.filteredProducts$ = this.searchService.search$.pipe(      
      switchMap(searchTerm =>
        this.products$.pipe(
          map(products => {
            const filtered = products.filter(product =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            this.productNotFound = filtered.length === 0;
            return filtered;
          })
        )
      )
    );

  }


  getProductsDetails(id: number) {
    if (id) {
      this.router.navigate(['/products', id,]);
    }
  }


  editProduct(product: Product) {
    if (product) {
      this.router.navigateByUrl(`/products/${product.id}/edit`)
    }
  }
  

  onSearch(event: any) {
    const searchProduct = event
    this.filteredProducts$ = this.products$.pipe(
      map(products => {
        const filteredProduct = products.filter(product =>
          product.name.toLowerCase().includes(searchProduct.toLowerCase())
        );
        this.productNotFound = filteredProduct.length === 0;
        return filteredProduct
      })
    )
  }


  deleteProductById(id:number){
    if(id){
      this.productService.deleteProduct(id).subscribe(()=>{
        this.products$ = this.productService.getProducts();
        this.filteredProducts$ = this.products$; 
      });
     
    }
  }

  trackById(index: number, product: Product) { 
    return product.id
  }

}
