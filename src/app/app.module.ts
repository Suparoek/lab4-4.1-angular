import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {BackendService} from './backend.service'
import { CatalogModule } from './catalog/catalog.module';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,CatalogModule,HomeModule,AppRoutingModule, BrowserAnimationsModule,MatButtonModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
