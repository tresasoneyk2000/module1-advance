package com.ust.rest.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.ust.rest.resource.Product;
import com.ust.rest.resource.User;

import com.ust.rest.respository.ProductRepository;
import com.ust.rest.respository.UserRepository;


//import com.ust.rest.respository.ProductRespository;
@Service
public class ProductService {
	@Autowired
	ProductRepository productRepository;
	@Autowired
	UserRepository userRepository;
//	public Product getProduct(long productId) {
//		return respository.getProduct(productId);
//	}
//	public ArrayList<Product> getProducts(){
//		return respository.getProducts();
//		
//	}
//	@Transactional(propagation =Propagation.REQUIRED)
//	public Product add(Product product) {
//		
//			Product productT=productRepository.save(product);
//			User user=new User();
//			user.setUserId(5L);
//			user.setDateTime(System.currentTimeMillis()+"66");
//			User userT=userRepository.save(user);
//			//System.out.println(userT);
//			return productT;}
//			
//			if(userT!=null && productT!=null) 
//			return true;
//			else 
//				throw new RuntimeException("record not inserted....");
//			
//		}
	//@Transactional(propagation =Propagation.REQUIRED)
	public Product add(Product product) {
		
			Product productT=productRepository.save(product);
			User user=new User();
			user.setUserId(5L);
			user.setDateTime(System.currentTimeMillis()+"888888888888");
			User userT=userRepository.save(user);
			//System.out.println(userT);
			return productT;}
	
	
	
	
	public  Product getProduct(long productId) {
		Optional<Product> optional=productRepository.findById(productId);
				if(optional.isPresent()) {
					return optional.get();
				}
				else {
					return null;
				}
	}
	
	
	public List<Product> getProducts(){
		return productRepository.findAll();	}
	public void updateProduct(Product product) {
		Optional<Product> optional=productRepository.findById(product.getProductId());
		Product tempProduct =optional.get();
		tempProduct.setDescription(product.getDescription());
		tempProduct.setName(product.getName());
		tempProduct.setQty(product.getQty());
		tempProduct.setPrice(product.getPrice());
		 productRepository.save(tempProduct);
	}
//	
	public void deleteProduct(long productId) {
		productRepository.deleteById(productId);
	}
	public boolean validate(Product product) {
		if(product.getName().equals("Camera")) {
			return true;
			
		}
		else {
			return false;
		}
	}

}
