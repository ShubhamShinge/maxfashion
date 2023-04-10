package com.maxfashion.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto {
	private int id;
	private String userEmail;
	private String name;
	private long mobileNo;
	private int pincode;
	private String city;
	private String state;
	private String houseNo;
	private String streetNo;
	private String landmark;
}
