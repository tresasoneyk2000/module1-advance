import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }
  getProducts(){
    return this.http.get<Product[]>("http://localhost:8090/product/api.2.0/retrieve/all");
  }
 
  saveProduct(product:Product):Observable<Object>{
    return this.http.post("http://localhost:8090/product/api.2.0/create", product);
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8090/product/api.2.0/retrive/${id}`);
  }
  
  updateProduct(product: Product): Observable<Object> {
    return this.http.put(`http://localhost:8090/product/api.2.0/update/${product.productId}`, product);
  }
  
  deleteProduct(id:number):Observable<Object>{
    return this.http.delete(`http://localhost:8090/product/api.2.0/delete/${id}`);
}}
