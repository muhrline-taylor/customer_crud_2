package com.taylormuhrline.customercrud.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.taylormuhrline.customercrud.models.Purchase;

@Repository
public interface PurchaseRepository extends CrudRepository<Purchase, Long> {

}
