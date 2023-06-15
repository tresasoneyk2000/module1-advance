import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  product: Product=new Product();
  constructor(private productService:ProductService,private router:Router,private formBuilder: FormBuilder){
    // this.productForm = this.formBuilder.group({
      // name: ['', Validators.required],
      // description: ['', Validators.required],
      // qty: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      // price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    // });
  }
  // productForm: FormGroup | undefined;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  OnSubmit(){
    this.saveProduct();
    console.log(this.product);

  }
  saveProduct() {
    this.productService.saveProduct(this.product).subscribe((data) => {
      this.gotoProductList;
    },
    error=>console.log(error));
  }
  gotoProductList() {
    this.router.navigate(['/retrieve']);
  }

}
