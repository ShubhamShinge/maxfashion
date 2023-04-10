package com.maxfashion.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.maxfashion.app.dto.UserDTO;
import com.maxfashion.app.responsemessage.UserResponseMessage;
import com.maxfashion.app.service.UserServiceImpl;

@RestController
@RequestMapping("user")
@CrossOrigin("*")
public class UserController {
	@Autowired
	UserServiceImpl userServiceImpl;
	
	//signup-> create user.
	@PostMapping("signup")										//http://localhost:9090/user/signup
	public ResponseEntity<UserResponseMessage> createUser(@RequestBody UserDTO userDto) {
			UserDTO result= userServiceImpl.saveUser(userDto);
			return new ResponseEntity<UserResponseMessage>(new UserResponseMessage(result,"User Created Successfully",false,null),HttpStatus.OK);
	}
	
	//Login -> get user details by email and password.
	@GetMapping("login/{email}/{password}")						//http://localhost:9090/user/login/shubham@gmail.com/1234
	public ResponseEntity<?> getEmailId(@PathVariable String email,@PathVariable String password){
			UserDTO user= userServiceImpl.getUser(email,password);
			return new ResponseEntity<UserResponseMessage>(new UserResponseMessage(user,"Logged In Successfully",false,null),HttpStatus.OK);
	}
	
	
	//Delete user
	@DeleteMapping("delete/{email}/{pass}")		//http://localhost:9090/user/delete/prathya@gmail.com/1234
	public ResponseEntity<?> deleteUser(@PathVariable String email,@PathVariable String pass){
			String msg=userServiceImpl.deleteUser(email,pass);
			return new ResponseEntity<UserResponseMessage>(new UserResponseMessage(null,msg,false,null),HttpStatus.OK);
	}
}
