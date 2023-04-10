package com.maxfashion.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.maxfashion.app.dto.UserDTO;
import com.maxfashion.app.entity.User;

@Mapper
public interface UserMapper {
	
	@Mapping(target="firstName",source="userDto.firstName")
	@Mapping(target="lastName",source="userDto.lastName")
	@Mapping(target="mobileNo",source="userDto.mobileNo")
	@Mapping(target="email",source="userDto.email")
	@Mapping(target="password",source="userDto.password")
	public User convertToEntity(UserDTO userDto);
	
	@Mapping(target="firstName",source="user.firstName")
	@Mapping(target ="lastName",source="user.lastName")
	@Mapping(target="mobileNo",source="user.mobileNo")
	@Mapping(target="email",source="user.email")
	@Mapping(target="password",source="user.password")
	public UserDTO convertToDto(User user);
}
