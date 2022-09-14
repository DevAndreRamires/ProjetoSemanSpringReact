package com.ramiresandre.dsmeta.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ramiresandre.dsmeta.entities.sale;
import com.ramiresandre.dsmeta.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

	
	@Autowired
	private SaleService service;
	
	@GetMapping
	public List<sale> findSales(){
		return service.findSales();
		
	}
	}
	

