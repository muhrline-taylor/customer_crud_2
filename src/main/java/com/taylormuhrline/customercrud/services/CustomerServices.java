package com.taylormuhrline.customercrud.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.taylormuhrline.customercrud.models.Customer;
import com.taylormuhrline.customercrud.repositories.CustomerRepository;

@Service
public class CustomerServices {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	
	
	// ------------------------------- METHODS ---------------------------------- //
	
	// GET ALL -------------------- //
	public List<Customer> getAllCustomers(){
		return (List<Customer>) customerRepository.findAll();
	}
	
	// GET BY ID ------------------- //
	public ResponseEntity<Optional<Customer>> getCustomerById(Long id) {
		Optional<Customer> customer = customerRepository.findById(id);
		return ResponseEntity.ok(customer);
	}
	
	// CREATE ---------------------- //
	public Customer createCustomer(String name, String email) {
		Customer customer = new Customer(name, email);
		return customerRepository.save(customer);
	}
	
	
	
}
