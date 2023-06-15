import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  constructor(private services:ProductService,private router: Router){}
  //constructor() { }

 //productId:number=0;
  products:Product[]=[];
  ngOnInit(): void {
    this.products=this.getProducts();
  }

  getProducts():any{
    this.services.getProducts().subscribe((products: Product[])=>{
    this.products=products;
  });
}
deletebyid(productId: number):void{
  this.services.deleteProduct(productId).subscribe(
    (data) => {
    this.gotoProductList;
    },
    (error) => {
      console.log('Error deleted product:', error);
    }
  );}
  gotoProductList() {
    this.router.navigate(['/retrieve']);
  }
// deletebyid(productId?: number): void {
//   if (productId !== undefined) {
//     this.services.deleteProduct(productId).subscribe(
//       (response) => {
//         console.log('Product deleted successfully');
//       },
//       (error) => {
//         console.log('Error deleting product:', error);
//       }
//     );
//   } else {
//     console.log('Invalid product ID');
//   }
}








