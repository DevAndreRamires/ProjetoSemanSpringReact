package com.ramiresandre.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ramiresandre.dsmeta.SaleRepositories;
import com.ramiresandre.dsmeta.entities.sale;



@Service
public class SaleService {
	
	
	@Autowired
	private SaleRepositories repository;
	
	public List<sale> findSales() {
		return repository.findAll();
	}

}
