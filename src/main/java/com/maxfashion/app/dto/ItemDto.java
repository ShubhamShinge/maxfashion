package com.maxfashion.app.dto;

import java.util.List;

import com.maxfashion.app.entity.ItemStock;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemDto {
	private String itemName;
	private String url;
	private float price;
	private String description;
	private String brand;
	private int discount;
	private List<ItemStock> stock;
	
}
