package com.maxfashion.app.dto;

import java.util.List;

import com.maxfashion.app.entity.CartItem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {

	private List<CartItem> cartItems;
	private String userEmail;
}
