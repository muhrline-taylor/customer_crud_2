package com.taylormuhrline.customercrud.validators;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import com.taylormuhrline.customercrud.models.Customer;
import com.taylormuhrline.customercrud.services.CustomerServices;

@Component
public class CustomerValidators implements Validator {
	
	@Autowired
	private CustomerServices customerServices;
	
	@Override
	public boolean supports(Class<?> clazz) {
		return Customer.class.equals(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
		Customer customer = (Customer) target;
		
		// TODO Auto-generated method stub
		
	}
	
	
	
}
