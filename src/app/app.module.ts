import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './component/product-list/product-list.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { PagenotFoundComponent } from './page/pagenot-found/pagenot-found.component';
import { HomeComponent } from './home/home/home.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    AboutPageComponent,
    PagenotFoundComponent,
    HomePageComponent,
    DashboardComponent,
    AdminProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    PagenotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
