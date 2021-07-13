package com.taylormuhrline.customercrud.controllers;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.taylormuhrline.customercrud.models.Product;
import com.taylormuhrline.customercrud.repositories.ProductRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/products")
public class ProductController {
	
	@Autowired
	ProductRepository productRepository;
	
	
	
	// PATHS ------------------------------------------ // 
	
	@GetMapping("/")
	public Iterable<Product> viewAllProducts() {
		return productRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Product getProductById(@PathVariable Long id) {
		return productRepository.findById(id).orElseThrow();
	}
	
	@PostMapping("/new")
	public Product createProduct(@RequestBody Product product) {
		String name = product.getName();
		String description = product.getDescription();
		BigDecimal price = product.getPrice();
		System.out.println("working");
		
		Product newProduct = new Product(
							name,
							description,
							price
				);
		return productRepository.save(newProduct);
		
	}
	
	
	// SELL PRODUCT --------- //
	@PutMapping("/{id}/buy")
	public Product updateProductSold(
				@PathVariable("id")Long id
			) {
		Product product = productRepository.findById(id).orElseThrow();
		if(product.isSold() == false) {
			product.setSold(true);
		} else {
			product.setSold(false);
		}
		return productRepository.save(product);	
	}
	
	// UPDATE PRODUCT --------- //
		@PutMapping("/{id}/update")
		public Product updateProduct(
					@PathVariable("id")Long id,
					@RequestBody Product updatedProduct
				) {
			Product product = productRepository.findById(id).orElseThrow();
			product.setName(updatedProduct.getName());
			product.setDescription(updatedProduct.getDescription());
			product.setPrice(updatedProduct.getPrice());
			
			return productRepository.save(product);
		}
	
	
}
