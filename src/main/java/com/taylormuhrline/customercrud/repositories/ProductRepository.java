package com.taylormuhrline.customercrud.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.taylormuhrline.customercrud.models.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

}
