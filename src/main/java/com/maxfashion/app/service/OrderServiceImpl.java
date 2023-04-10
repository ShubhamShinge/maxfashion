package com.maxfashion.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.maxfashion.app.entity.CartItem;
import com.maxfashion.app.entity.OrderItem;
import com.maxfashion.app.entity.Orders;
import com.maxfashion.app.entity.User;
import com.maxfashion.app.exception.DatabaseException;
import com.maxfashion.app.exception.ResourceNotFoundException;
import com.maxfashion.app.mapper.OrderItemMapper;
import com.maxfashion.app.repository.CartItemRepository;
import com.maxfashion.app.repository.CartRepository;
import com.maxfashion.app.repository.OrderuserRepository;
import com.maxfashion.app.repository.UserRepository;

@Service
@Transactional
public class OrderServiceImpl {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	CartRepository cartRepository;
	
	@Autowired
	OrderItemMapper orderItemMapper;
	@Autowired
	OrderuserRepository orderRepository;
	@Autowired
	CartItemRepository cartItemRepository;
	public Orders createOrder(String email) {
			Orders orders = new Orders();
			User user=userRepository.findByEmail(email);
			if(user==null)
				throw new ResourceNotFoundException("User Not Found With given Details");
			List<CartItem> listOfItems=cartRepository.findByUser(user).getListOfItems();
			if(listOfItems==null)
				throw new ResourceNotFoundException("Cart Is Empty!");
			orders.setUser(user);
			List<OrderItem> orderList=new ArrayList<OrderItem>();
			for(CartItem cartItem:listOfItems) {
				orderList.add(orderItemMapper.convertCartItemToOrderItem(cartItem));
				cartItemRepository.delete(cartItem);
			}
			orders.setListOfOrderItem(orderList);
			try {
				orders=orderRepository.save(orders);
			} catch (Exception e) {
				throw new DatabaseException("Could Not Connect To Servers");
			}
			return orders; 
	}
}
