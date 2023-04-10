package com.maxfashion.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maxfashion.app.dto.CartDto;
import com.maxfashion.app.entity.Cart;
import com.maxfashion.app.entity.CartItem;
import com.maxfashion.app.entity.Item;
import com.maxfashion.app.entity.ItemStock;
import com.maxfashion.app.entity.User;
import com.maxfashion.app.exception.ResourceNotFoundException;
import com.maxfashion.app.repository.CartItemRepository;
import com.maxfashion.app.repository.CartRepository;
import com.maxfashion.app.repository.ItemRepository;
import com.maxfashion.app.repository.UserRepository;

@Service
@Transactional
public class CartServiceImpl {
	
	@Autowired
	CartRepository cartRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	ItemRepository itemRepository;
	
	@Autowired
	CartItemRepository cartItemRepository;
	 
	//add item to cart and if exists increment count.
	public Cart saveItemToCart(CartDto cartDto) {
		User user=userRepository.findByEmail(cartDto.getUserEmail());			//check if user exists in the database.
		if(user==null)
			throw new ResourceNotFoundException("User Not Found With given Details");

		Item item=itemRepository.findByItemName(cartDto.getItemName());			//check if item exists in database.
		if(item==null)
			throw new ResourceNotFoundException("Item Not Found With given Details");
																				//find cart for particular user.
		Cart cart=cartRepository.findByUser(user);
		List<CartItem> cartItems;
		if(cart==null) {														//if cart doesn't exist create a new one.
			cart=new Cart();
			cart.setUser(user);													//link newly created cart to user.
			cartItems=new ArrayList<CartItem>();		
		}
		else 
			cartItems=cart.getListOfItems();									//get list of existing items in cart.
																				//check if item already exists in the list.
		CartItem cartItem=cartItemRepository.findByItemAndUserAndSize(item,user,cartDto.getSize());
																				//if doesn't exists add it to the list. 
		if(cartItem==null) {		
			cartItem =new CartItem(0,item,cartDto.getSize(),1,user);
			cartItems.add(cartItem);
		}
																				//if already exists then just increment the count.
		else if(cartItems.contains(cartItem)) {
			cartItems.remove(cartItem);
			cartItem.setQuantity(cartItem.getQuantity()+1);
			cartItems.add(cartItem);
		}
																				//updating count at item.
		ItemStock currentItemStock=item.getStock().stream().filter(p->p.getSize()==cartDto.getSize()).findAny().get();
		int index=item.getStock().indexOf(currentItemStock);
		currentItemStock.setQuantity(currentItemStock.getQuantity()-1);
		item.getStock().set(index,currentItemStock);
		cart.setListOfItems(cartItems);
		itemRepository.save(item);
																				//saving item in database.
		return cartRepository.save(cart);
	}
	
	
	//delete item from count
	public Cart deleteItemFromCart(CartDto cartDto) {
		User user=userRepository.findByEmail(cartDto.getUserEmail());
		if(user==null)
			throw new ResourceNotFoundException("User Not Found With given Details");
		
		Cart cart=cartRepository.findByUser(user);
		if(cart==null)
			throw new ResourceNotFoundException("Cart Doesn't Exist For Particular User");
		
		List<CartItem> cartItems=cart.getListOfItems();			//get existing items from cart.
		CartItem cartitem= cartItemRepository.findByItemAndUserAndSize(itemRepository.findByItemName(cartDto.getItemName()),userRepository.findByEmail(cartDto.getUserEmail()),cartDto.getSize());
		cartItems.remove(cartitem);
		cart.setListOfItems(cartItems);

		int quantity=cartitem.getQuantity();
		ItemStock i=cartitem.getItem().getStock().stream().filter(p->p.getSize()==cartDto.getSize()).findAny().get();
		int index=cartitem.getItem().getStock().indexOf(i);
		i.setQuantity(i.getQuantity()+quantity);
		cartitem.getItem().getStock().set(index, i);
		itemRepository.save(cartitem.getItem());
		cart=cartRepository.save(cart);
		cartItemRepository.deleteById(cartitem.getCartItemId());
		return cart;
	}
	//delete just one item from cart.
	public Cart decreaseCountItemToCart(CartDto cartDto) {
		Cart cart=cartRepository.findByUser(userRepository.findByEmail(cartDto.getUserEmail()));
		List<CartItem> cartItems;
		if(cart==null) {
			cart=new Cart();
			User user=userRepository.findByEmail(cartDto.getUserEmail());
			cart.setUser(user);
			cartItems=new ArrayList<CartItem>();
		}
		else {
			cartItems=cart.getListOfItems();
		}
		Item item=itemRepository.findByItemName(cartDto.getItemName());
		if(item==null) {
			return cart;
		}
		User user=userRepository.findByEmail(cartDto.getUserEmail());
		if(user==null) {
			return cart;
		}
		CartItem cartItem = cartItemRepository.findByItemAndUserAndSize(item, user,cartDto.getSize());
		if(cartItem==null) {
			cartItem =new CartItem(0,item,cartDto.getSize(),1,user);
			cartItems.add(cartItem);
		}
		else if(cartItems.contains(cartItem)) {
			cartItems.remove(cartItem);
			if(cartItem.getQuantity()>1) {
			cartItem.setQuantity(cartItem.getQuantity()-1);
			cartItems.add(cartItem);
			}
		}
	//	updating count at item.
		ItemStock i=item.getStock().stream().filter(p->p.getSize()==cartDto.getSize()).findAny().get();
		int index=item.getStock().indexOf(i);
		 i.setQuantity(i.getQuantity()+1);
		item.getStock().set(index,i);
		cart.setListOfItems(cartItems);
		itemRepository.save(item);
		return cartRepository.save(cart);
	}
	//get all items from cart.
	public Cart getAllCartItems(String name) {
		return cartRepository.findByUser(userRepository.findByEmail(name));
	}
}
