package com.maxfashion.app.dto;


import com.maxfashion.app.enums.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartDto {
	
	private String userEmail;
	private String itemName;
	private Size size;
}
