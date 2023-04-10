package com.maxfashion.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maxfashion.app.dto.AddressDto;
import com.maxfashion.app.entity.Address;
import com.maxfashion.app.entity.User;
import com.maxfashion.app.mapper.AddressMapper;
import com.maxfashion.app.repository.AddressRepository;
import com.maxfashion.app.repository.UserRepository;

@Service
@Transactional
public class AddressServiceImpl {
	@Autowired
	AddressRepository addressRepository;
	
	@Autowired
	AddressMapper addressMapper;
	
	@Autowired
	UserRepository userRepository;
	
	public AddressDto addAddress(AddressDto addressDto) {
		Address address=addressMapper.convertDtoToEntity(addressDto);
		address.setUser(userRepository.findByEmail(addressDto.getUserEmail()));
		address=addressRepository.save(address);
		return addressMapper.convertEntityToDto(address);
	}
	
	public List<AddressDto> getByUser(String userEmail){
		User user=userRepository.findByEmail(userEmail);
		List<Address> addressList=addressRepository.findByUser(user);
		List<AddressDto> addressListDtos=new ArrayList<AddressDto>();
		for(Address address:addressList)
			addressListDtos.add(addressMapper.convertEntityToDto(address));
		return addressListDtos;
	}
}
