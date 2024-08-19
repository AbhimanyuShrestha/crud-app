import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [  
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductListComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'products/:id/edit',component:ProductEditComponent},
  { path: '', redirectTo:'/home', pathMatch:'full'  }, 
  { path: '**', redirectTo:'/home', pathMatch:'full'  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
