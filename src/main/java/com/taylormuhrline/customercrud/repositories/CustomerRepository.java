package com.taylormuhrline.customercrud.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.taylormuhrline.customercrud.models.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long>{

}
