import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
//   product: Product=new Product();
//  id:number=0;
//   constructor(private productService:ProductService){}
//   ngOnInit(): void {
    
//   }
//   OnSubmit(){
//     //this.productbyid()
 
//     this.productbyid();
//     console.log(this.product);

//   }
//   productbyid(){
    
//     this.productService.productbyid(this.id).subscribe(data=>{
//       console.log(data);
//     },
//     error=>console.log(error));
//   }

//   }
//   // updateProduct(product1:Product){
//   //   this.product.productId=product1.productId;
//   //   this.product.description=product1.description;
//   //   this.product.name=product1.name;
//   //   this.product.price=product1.price;
//   //   this.product.qty=product1.qty;
    
//   // }

// //}
productId: number = 0;
product: any;

constructor(private productService: ProductService) { }

ngOnInit(): void {
}

retrieveProductById(): void {
  this.productService.getProductById(this.productId).subscribe(
    (product) => {
      this.product = product;
    },
    (error) => {
      console.log('Error retrieving product:', error);
    }
  );
}

saveUpdatedProduct(): void {
  this.productService.updateProduct(this.product).subscribe(
    (response) => {
      console.log('Product updated successfully');
    },
    (error) => {
      console.log('Error updating product:', error);
    }
  );
}

// product:Product=new Product();
// productid:number=0;
// constructor(private productService: ProductService) { }
// search(){
//   console.log("search called" + this.productid);
//   this.productService.getProductById2(this.productid).subscribe(data=>{this.product=data;
//   console.log(data);},
//   error=>console.log(error));
// }
}