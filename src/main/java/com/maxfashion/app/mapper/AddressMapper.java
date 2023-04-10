package com.maxfashion.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.maxfashion.app.dto.AddressDto;
import com.maxfashion.app.entity.Address;

@Mapper
public interface AddressMapper {
	@Mapping(source = "id",target = "id")
	@Mapping(source = "name",target = "name")
	@Mapping(source = "mobileNo",target = "mobileNo")
	@Mapping(source = "pincode",target = "pincode")
	@Mapping(source = "city",target = "city")
	@Mapping(source = "state",target = "state")
	@Mapping(source = "houseNo",target = "houseNo")
	@Mapping(source = "streetNo",target = "streetNo")
	@Mapping(source = "landmark",target = "landmark")
	public Address convertDtoToEntity(AddressDto addressDto);
	
	@Mapping(source = "id",target = "id")
	@Mapping(source = "name",target = "name")
	@Mapping(source = "mobileNo",target = "mobileNo")
	@Mapping(source = "pincode",target = "pincode")
	@Mapping(source = "city",target = "city")
	@Mapping(source = "state",target = "state")
	@Mapping(source = "houseNo",target = "houseNo")
	@Mapping(source = "streetNo",target = "streetNo")
	@Mapping(source = "landmark",target = "landmark")
	public AddressDto convertEntityToDto(Address address);
}
