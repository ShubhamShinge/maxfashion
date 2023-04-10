package com.maxfashion.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maxfashion.app.repository.CartItemRepository;

@Service
@Transactional
public class CartItemService {
	
	@Autowired
	CartItemRepository cartItemRepository;
	
}
