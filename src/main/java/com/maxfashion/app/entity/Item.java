package com.maxfashion.app.entity;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Item {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int itemId;
	private String itemName;
	private String url;
	private float price;
	private String brand;
	private int discount;
	private String description;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="itemId",referencedColumnName = "itemId")
	private List<ItemStock> stock;
	
}
