package com.ust.rest.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ust.rest.resource.Product;
//import com.ust.rest.respository.ProductRespository;
import com.ust.rest.services.ProductService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
//@CrossOrigin
@RestController
@RequestMapping("/product/api.2.0")
//@Api(value="Product Service API 2.0", description="Rest end points of ApI")

@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})

public class ProductResource {
	@Autowired
	ProductService service;
	@GetMapping("/retrive/{productId}")

	//@RequestMapping
	//@ApiOperation(value="Returns the product entity ")
	
	public Product fetchProduct(@PathVariable long productId) {
		return service.getProduct(productId);
		
	}
	
//	
	
	@GetMapping
	public String test() {
		return "test() called...";
	}
//	
	//@CrossOrigin
	@GetMapping
	@RequestMapping("/retrieve/all")
	//@ApiOperation(value="Returns the product entity ")

	public ResponseEntity<List<Product>> fetchProducts(){
		//return ResponseEntity.status(HttpStatus.ACCEPTED).body(service.getProducts());
		//return ResponseEntity.ok(service.getProducts());
		//return new ResponseEntity(service.getProducts(),HttpStatus.ACCEPTED);
		return ResponseEntity.ok().body(service.getProducts());
		
	}
@PostMapping
@RequestMapping(value="/create", consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE )
//@ApiOperation(value="Returns the product entity ")
public ResponseEntity<?> addProduct(@RequestBody Product product){
	Exception exception=null;
	Product tempProduct=null;
	try {
		tempProduct=service.add(product);
	}
	catch(Exception e) {
		exception=e;
	}
	if(tempProduct!=null) {
		return ResponseEntity.status(HttpStatus.CREATED).body(tempProduct);
	}
	else {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(exception);
	}
//	boolean result = service.add(product);
//	if(result) {
//		return ResponseEntity.status(HttpStatus.CREATED).body(true);
//	}
//	else {
//		return ResponseEntity.status(HttpStatus.CREATED).body(false);
//		
//	}
}


@PutMapping
@RequestMapping(value="/update/{id}" , consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE )

//@ApiOperation(value="Returns the product entity ")
public void updateProduct(@RequestBody Product product) {
	
	 service.updateProduct(product);
}
//
//
@DeleteMapping
@RequestMapping(value="delete/{productId}")
//@ApiOperation(value="Returns the product entity ")
public void deleteProduct(@PathVariable long productId) {
	service.deleteProduct(productId);
	
}
//



}
