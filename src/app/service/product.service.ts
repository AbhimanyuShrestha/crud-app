import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable, of, retry, switchMap, tap, throwError } from 'rxjs';
import { Product } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,private toastr:ToastrService) { }
  private baseUrl= environment.baseUrl
  private productsUrl = `${this.baseUrl}/api/v1/product`;

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl).pipe(     
      map(products => products), 
      catchError(error=>{        
        return throwError(()=>new Error('Error Occured'))
      })
    );
  }  
  getProductsById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`).pipe(
      catchError(error => {
        if (error.status === 404) {
          this.toastr.error('Product not found.');
        }
        return throwError(() => new Error('Error fetching product'));
      })
    );
  }
  

  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.productsUrl}/${product.id}`, product).pipe(
      tap(() => this.toastr.success('Product updated successfully!')), 
      catchError(error => {        
        return throwError(() => new Error('Error Occured'));
      })
    );
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.productsUrl}`, product).pipe(
      tap(() => this.toastr.success('Product created successfully!')), 
      catchError(error=>{
        return throwError(()=>new Error('Error Occured'))
      })
    );
  }


  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.productsUrl}/${id}`).pipe(
      tap(() => this.toastr.success('Product deleted successfully!')), 
      catchError(error=>{
        return throwError(()=>new Error('Error Occured'))
      })
    );
  }

  
}
