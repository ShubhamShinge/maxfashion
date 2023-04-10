package com.maxfashion.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maxfashion.app.dto.CartDto;
import com.maxfashion.app.entity.Cart;
import com.maxfashion.app.service.CartServiceImpl;

@RestController
@RequestMapping("cart")
@CrossOrigin("*")
public class CartController {
	
	@Autowired
	CartServiceImpl cartServiceImpl;
	
	//add item to cart
	@PostMapping("additemtocart")
	public Cart addCart(@RequestBody CartDto cartDto) {
		return cartServiceImpl.saveItemToCart(cartDto);
	}
	
	@PutMapping("deleteitemfromcart")
	public Cart deleteCart(@RequestBody CartDto cartDto) {
		return cartServiceImpl.deleteItemFromCart(cartDto);
	}
	
	@PutMapping("decresasecount")
	public Cart decreaseCountItemFromCart(@RequestBody CartDto cartDto) {
		return cartServiceImpl.decreaseCountItemToCart(cartDto);
	}
	
	
	@GetMapping("getitemfromcart/{useremail}")
	public Cart get(@PathVariable String useremail) {
		return cartServiceImpl.getAllCartItems(useremail);
	}
}
