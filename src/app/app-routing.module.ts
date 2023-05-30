import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { HomeComponent } from './home/home/home.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProductEditComponent } from './page/product-edit/product-edit.component';
import { PagenotFoundComponent } from './page/pagenot-found/pagenot-found.component';


const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent, children: [
      { path: "", component: HomeComponent },
      { path: "about", component: AboutPageComponent },
      { path: "product/:id", component: ProductDetailComponent }
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent},
      { path: "product", component: ProductListComponent },
      { path: "product/add", component: ProductAddComponent },
      { path: "product/:id/edit", component: ProductEditComponent }
    ]
  },
  { path: "**", component: PagenotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
