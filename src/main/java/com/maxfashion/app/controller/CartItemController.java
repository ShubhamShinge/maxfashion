package com.maxfashion.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maxfashion.app.dto.CartDto;
import com.maxfashion.app.entity.CartItem;
import com.maxfashion.app.service.CartItemServiceImpl;

@RestController
@RequestMapping("cartItem")
@CrossOrigin("*")
public class CartItemController {
	@Autowired
	CartItemServiceImpl cartItemServiceImpl;
	
	@PostMapping("save")
	public ResponseEntity<?> saveItem(@RequestBody CartDto cartDto) {
		CartItem cartItem=cartItemServiceImpl.saveItem(cartDto);
		return new ResponseEntity<CartItem>(cartItem,HttpStatus.OK);
	}
	
	@PutMapping("delete")
	public ResponseEntity<?> deleteItem(@RequestBody CartDto cartDto){
		cartItemServiceImpl.deleteItem(cartDto);
		return null;
	}
	
	@PutMapping("decrease")
	public ResponseEntity<?> decreaseItem(@RequestBody CartDto cartDto){
		cartItemServiceImpl.decreaseItem(cartDto);
		return null;
	}
	
	@GetMapping("getByUser/{email}")
	public List<CartItem> getAllItems(@PathVariable String email){
		return cartItemServiceImpl.getByUser(email);
	}
}
