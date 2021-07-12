package com.taylormuhrline.customercrud.controllers;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.taylormuhrline.customercrud.models.Purchase;
import com.taylormuhrline.customercrud.repositories.CustomerRepository;
import com.taylormuhrline.customercrud.repositories.PurchaseRepository;
import com.taylormuhrline.customercrud.services.CustomerServices;
import com.taylormuhrline.customercrud.services.PurchaseServices;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/purchases")
public class PurchaseController {

	@Autowired 
	private PurchaseServices purchaseServices;
	
	@Autowired
	private CustomerServices customerServices;
	
	@Autowired
	private PurchaseRepository purchaseRepository;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	// ----------------------- PATHS --------------------------- //
	
	// GET ALL
	@GetMapping("/")
	public List<Purchase> getAllPurchase(){
		return purchaseServices.getAllPurchases();
	}
	
	// GET BY ID
	@GetMapping("/{id}")
	public Optional<Purchase> getPurchaseById(@RequestParam("id") Long id) {
		return purchaseRepository.findById(id);
	}
	
	// CREATE 
	@PostMapping("/new")
	public Purchase createPurchase(
			@RequestBody Purchase purchase
	) {
		String title = purchase.getTitle();
		BigDecimal amount = purchase.getAmount();
		Long customer_id = purchase.getCustomer_id();
		
		return purchaseServices.createPurchase(title, amount, customer_id);
		
		// THIS FUNCTION NEEDS TO TAKE IN REQUESTBODY, SPLIT IT UP, THEN PASS IT TO SERVICES
	}
	
	
	
	
	
	
	
	
	
	
	
	
}
