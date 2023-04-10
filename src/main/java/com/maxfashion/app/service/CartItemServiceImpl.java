package com.maxfashion.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maxfashion.app.dto.CartDto;
import com.maxfashion.app.entity.CartItem;
import com.maxfashion.app.entity.Item;
import com.maxfashion.app.entity.User;
import com.maxfashion.app.exception.DatabaseException;
import com.maxfashion.app.exception.ResourceNotFoundException;
import com.maxfashion.app.repository.CartItemRepository;
import com.maxfashion.app.repository.ItemRepository;
import com.maxfashion.app.repository.UserRepository;

@Service
public class CartItemServiceImpl {
	@Autowired
	CartItemRepository cartItemRepository;
	
	@Autowired
	ItemRepository itemRepository;
	
	@Autowired
	UserRepository userRepository;
	public CartItem saveItem(CartDto cartDto) {
		Item item=itemRepository.findByItemName(cartDto.getItemName());
		if(item==null)
			throw new ResourceNotFoundException("Item Not Available!");
		User user=userRepository.findByEmail(cartDto.getUserEmail());
		if(user==null)
			throw new ResourceNotFoundException("User Not found!"); 
		CartItem cartItem=cartItemRepository.findByItemAndUserAndSize(item,user,cartDto.getSize());
		if(cartItem==null) {
			cartItem=new CartItem();
			cartItem.setItem(item);
			cartItem.setUser(user);
			cartItem.setSize(cartDto.getSize());
			cartItem.setQuantity(1);
					
		}
		else {
			cartItem.setQuantity(cartItem.getQuantity()+1);
		}
		try {
		return cartItemRepository.save(cartItem);
		} catch (Exception e) {
			throw new DatabaseException("Oops!Server Conection Failed...");
		}
		
	}
	
	public String deleteItem(CartDto cartDto) {
		Item item=itemRepository.findByItemName(cartDto.getItemName());
		if(item==null)
			throw new ResourceNotFoundException("Item Not Available!");
		User user=userRepository.findByEmail(cartDto.getUserEmail());
		if(user==null)
			throw new ResourceNotFoundException("User Not found!"); 
		CartItem cartItem=cartItemRepository.findByItemAndUserAndSize(item,user,cartDto.getSize());
		if(cartItem==null)
			throw new ResourceNotFoundException("No Such Item Exists In The Cart!");
		cartItemRepository.delete(cartItem);
		return  "Item Deleted Successfully";
	}
	
	public CartItem decreaseItem(CartDto cartDto) {
		Item item=itemRepository.findByItemName(cartDto.getItemName());
		if(item==null)
			throw new ResourceNotFoundException("Item Not Available!");
		User user=userRepository.findByEmail(cartDto.getUserEmail());
		if(user==null)
			throw new ResourceNotFoundException("User Not found!"); 
		CartItem cartItem=cartItemRepository.findByItemAndUserAndSize(item,user,cartDto.getSize());
		if(cartItem==null)
			throw new ResourceNotFoundException("No Such Item Exists In The Cart!");
		cartItem.setQuantity(Math.max(0,cartItem.getQuantity()-1));
		if(cartItem.getQuantity()==0)
			cartItemRepository.delete(cartItem);
		else
			cartItemRepository.save(cartItem);
		return null;
		
	}

	public List<CartItem> getByUser(String email) {
		User user=userRepository.findByEmail(email);
		if(user==null)
			throw new ResourceNotFoundException("User Not Found!");
		return cartItemRepository.findByUser(user);
	}
}
