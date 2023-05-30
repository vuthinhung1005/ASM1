import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
products:IProduct []=[]
title = 'quan li san pham';
status: boolean = false;
valueInput:string="";

constructor(private productService:ProductService){
  this.productService.getProducts().subscribe(data=>{
    this.products = data;
  }, error=> console.log(error))

}
toggle(){
  console.log('1');
  this.status = !this.status;
  
}
setValue(e:any){
  this.valueInput = e.target.value;
}
removeItem(id:any){
  this.productService.deleteProduct(id).subscribe(()=>{
    console.log("ban xoa thanh cong");
    this.products =this.products.filter(item=>item.id !=id)
    
  })
}
}
