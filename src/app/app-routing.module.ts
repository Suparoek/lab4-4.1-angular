import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';

const routes: Routes=[
  {
    path:'hoem',
    component: NavbarComponent
  },
  {
    path:'products',
    component: ProductListComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
