import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  productId!: number;
product: Product = new Product();

constructor(private productService: ProductService,private route: ActivatedRoute,private router:Router) { }

ngOnInit(): void {
  //this.productId = +this.route.snapshot.paramMap.get('productId') ?? 0;
  const productIdParam = this.route.snapshot.paramMap.get('productId');
    this.productId = productIdParam ? +productIdParam : 0;
    this.retrieveProductById();
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
    (data) => {
      this.gotoProductList();
    },
    (error) => {
      console.log('Error updating product:', error);
    }
  );
}
gotoProductList() {
  this.router.navigate(['/retrieve']);
}
}
