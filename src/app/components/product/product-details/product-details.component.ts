import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../models/product.model';
import { Location } from '@angular/common'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product!:Product
  constructor(
    private route: ActivatedRoute,
    private productService:ProductService, 
    private router:Router){}
  
  
  ngOnInit(): void {
   this.route.paramMap.subscribe(params=> {
    const id = params.get('id');
    if (id !== null) {
     this.getProductById(+id);
    }
   })


  }

  getProductById(id:number){
    if(id){
      this.productService.getProductsById(id).subscribe(product=>{
        this.product=product;      
      })
    }   
  }


  goBackToPrevPage(): void {
   
    this.router.navigateByUrl('/products')
  }

}
