package com.taylormuhrline.customercrud.services;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.taylormuhrline.customercrud.models.Customer;
import com.taylormuhrline.customercrud.models.Purchase;
import com.taylormuhrline.customercrud.repositories.PurchaseRepository;

@Service
public class PurchaseServices {

	@Autowired
	PurchaseRepository purchaseRepository;
	
	@Autowired
	CustomerServices customerServices;
	
	
	
	
	// ------------------------------- METHODS ---------------------------------- //
	
	// GET ALL -------------------- //
	public List<Purchase> getAllPurchases(){
		return (List<Purchase>) purchaseRepository.findAll();
	}
	
	// GET ONE BY ID ------------- //
	public ResponseEntity<Optional<Purchase>> getPurchaseById(Long id) {
		Optional<Purchase> purchase = purchaseRepository.findById(id);
		return ResponseEntity.ok(purchase);
	}
	
	// CREATE
	public Purchase createPurchase(String title, BigDecimal amount, Long customer_id) {		
		Purchase purchase = new Purchase(title, amount, customer_id);
		return purchaseRepository.save(purchase);
	}
	
	
	
}
