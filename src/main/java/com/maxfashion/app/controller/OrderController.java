package com.maxfashion.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maxfashion.app.entity.Orders;
import com.maxfashion.app.service.OrderServiceImpl;

@RestController
@RequestMapping("order")
public class OrderController {

	@Autowired
	OrderServiceImpl orderServiceImpl;
	
	@PostMapping("createorder/{email}")
	public Orders bookOrder(@PathVariable String email) {
		Orders order= orderServiceImpl.createOrder(email);	
		return order;
	}
}
