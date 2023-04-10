package com.maxfashion.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maxfashion.app.dto.UserDTO;
import com.maxfashion.app.entity.Cart;
import com.maxfashion.app.entity.User;
import com.maxfashion.app.enums.Role;
import com.maxfashion.app.exception.DatabaseException;
import com.maxfashion.app.exception.InvalidInputException;
import com.maxfashion.app.exception.ResourceNotFoundException;
import com.maxfashion.app.mapper.UserMapper;
import com.maxfashion.app.repository.CartRepository;
import com.maxfashion.app.repository.UserRepository;

@Service
public class UserServiceImpl {

	@Autowired
	UserRepository userRepository;
	@Autowired
	UserMapper userMapper;
	@Autowired
	CartRepository cartRepository;
	public  UserDTO saveUser(UserDTO userDto) {
		
			User user=userRepository.findByEmail(userDto.getEmail());
			if(user!=null)
				throw new InvalidInputException("User Already Exists With Same Email Id");
			user=userMapper.convertToEntity(userDto);
			user.setUserRole(Role.USER);
			user=userRepository.save(user);
			Cart cart=new Cart();
			cart.setUser(user);
			cartRepository.save(cart);
			return userMapper.convertToDto(user);
	}

	public String deleteUser(String email, String pass) {
		try {
			User user=userRepository.findByEmail(email);
			if(user==null)
				throw new ResourceNotFoundException("User Not Found With given Details");
			else if(user.getPassword().equals(pass))
				userRepository.delete(user);
			else
				throw new InvalidInputException("Wrong PassWord!");
		} catch (Exception e) {
			throw new DatabaseException("Unable To Fetch Database");
		}
		return "User Deleted Succesfully";
	}
	public UserDTO getUser(String email, String password) {
		User user=userRepository.findByEmail(email);
		if(user==null)
			throw new ResourceNotFoundException("Email Doens't Exist");
		else if(!user.getPassword().equals(password))
			throw new InvalidInputException("Entered Password Is wrong");
		else
			return userMapper.convertToDto(user);
	}
}
