import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product:IProduct={
    name:"",
    price: 0
  }
  constructor(private productService:ProductService, private router:Router){
  }
  onHandleSubmit(){
    this.productService.addProduct(this.product).subscribe(product=>{
      this.router.navigate(['/admin/product']);
    })
  }

}
