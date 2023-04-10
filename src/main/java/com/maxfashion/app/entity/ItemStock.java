package com.maxfashion.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.maxfashion.app.enums.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemStock {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int stockId;
	private Size size;
	private int quantity;
}
