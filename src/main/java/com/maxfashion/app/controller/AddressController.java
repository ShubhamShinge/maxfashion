package com.maxfashion.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maxfashion.app.dto.AddressDto;
import com.maxfashion.app.service.AddressServiceImpl;

@RestController
@RequestMapping("address")
@CrossOrigin("*")
public class AddressController {
	
	@Autowired
	AddressServiceImpl addressServiceImpl;
	
	@PostMapping("save")
	public AddressDto saveAddress(@RequestBody AddressDto addressDto) {
		System.out.println(addressDto);
		return addressServiceImpl.addAddress(addressDto);
	}
	
	@GetMapping("getbyuser/{email}")
	public List<AddressDto> getAddressByUser(@PathVariable String email){
		return addressServiceImpl.getByUser(email);
	}
}
