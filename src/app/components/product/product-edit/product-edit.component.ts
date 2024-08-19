import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidationService } from '../../../service/core/validation.service';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {
  productID!:number
  product! :Product;
  productForm = new FormBuilder().group({
    id: new FormControl(0, Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required,ValidationService.numberValidator])
  })
  productFormSubmitted: boolean = false;
  isUpdate:boolean=false;
  isCreate:boolean=false;
  createId:number=0

  constructor(
    private productService:ProductService,
    private route:ActivatedRoute,     
    private router:Router
  ) { 
    this.productForm.controls.id.disable();
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{      
      const id= params.get('id');
      if (id !== null) {
        this.handleProductId(+id)
       } 
    });   
  }

  

  handleProductId(id: number): void {
    if (id > 0) {
      this.isCreate = false;
      this.isUpdate = true;      
      this.getProductById(id);
    } else {
      this.isCreate = true;
      this.isUpdate = false;      
    }
  }

  updateProduct() {
    this.productFormSubmitted = true;
    if(this.productForm.invalid){
      return;
    }
    let product:Product={
      id:this.productForm.controls.id.value ?? 0,
      name:this.productForm.controls.name.value?? '',
      description:this.productForm.controls.description.value ?? '',
      price:this.productForm.controls.price?.value ?? 0,
    }
    this.productService.editProduct(product).subscribe(()=>{
      this.productFormSubmitted=false;
      this.productService.getProducts().subscribe();
      this.goToProductPage()
    });   
  }


  createProduct() {
    this.productFormSubmitted = true;
    if(this.productForm.invalid){
      return;
    }
    let product:Product={
      id:this.productForm.controls.id.value ?? 0,
      name:this.productForm.controls.name.value?? '',
      description:this.productForm.controls.description.value ?? '',
      price:this.productForm.controls.price?.value ?? 0,
    }
    this.productService.createProduct(product).subscribe(()=>{
      this.productFormSubmitted=false;
      this.productService.getProducts().subscribe();
      this.goToProductPage()
    });
    
  }


  getProductById(id:number){
    if(id){
      this.productService.getProductsById(id).subscribe(
        product=>{
        this.product=product;         
        if(this.product){
          this.productForm.controls.id?.setValue(product.id)
          this.productForm.controls.name?.setValue(product.name)
          this.productForm.controls.description?.setValue(product.description)
          this.productForm.controls.price?.setValue(product.price)
        }
      },
      error =>{
        this.goToProductPage();
      }
    )
    }   
  }

  goToProductPage(){   
    this.router.navigateByUrl('/products');
  }




}
