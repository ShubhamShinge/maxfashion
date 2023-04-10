package com.maxfashion.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.maxfashion.app.entity.CartItem;
import com.maxfashion.app.entity.OrderItem;

@Mapper
public interface OrderItemMapper {
	
	@Mapping(target = "item", source = "item")
	@Mapping(target = "size",source = "size")
	@Mapping(target = "quantity",source = "quantity")
	public OrderItem convertCartItemToOrderItem(CartItem cartItem);
}
