package com.taylormuhrline.customercrud.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.taylormuhrline.customercrud.models.Customer;
import com.taylormuhrline.customercrud.repositories.CustomerRepository;
import com.taylormuhrline.customercrud.repositories.PurchaseRepository;
import com.taylormuhrline.customercrud.services.CustomerServices;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/customers")
public class CustomerController {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private PurchaseRepository purchaseRepository;
	
	@Autowired 
	private CustomerServices customerServices;
	
	
	
		// ----------------------- PATHS --------------------------- //
	
	
	// GET ALL
	@GetMapping("/")
	public List<Customer> getAllCustomers(){
		return customerServices.getAllCustomers();
	}
	
	// GET BY ID
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Customer>> getCustomerById(@PathVariable Long id) {
		return customerServices.getCustomerById(id);
	}
	
	// CREATE
	@PostMapping("/new")
	public Customer createCustomer(@RequestBody Customer customer) {
		return customerServices.createCustomer(customer.getName(), customer.getEmail());
	}
	
	
	// DELETE
	@DeleteMapping("/{id}/delete")
	public void deleteCustomer(@PathVariable Long id) {
		customerRepository.deleteById(id);
	}
	
	
	
	
}
