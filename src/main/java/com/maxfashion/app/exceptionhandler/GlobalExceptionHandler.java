package com.maxfashion.app.exceptionhandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.maxfashion.app.dto.UserDTO;
import com.maxfashion.app.exception.InvalidInputException;
import com.maxfashion.app.exception.ResourceNotFoundException;
import com.maxfashion.app.responsemessage.UserResponseMessage;
@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(value = Exception.class)
	public ResponseEntity<UserResponseMessage> globalException(Exception e){
		return new ResponseEntity<UserResponseMessage>(new UserResponseMessage(null,e.getMessage(),true,e),HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(value = ResourceNotFoundException.class)
	public ResponseEntity<UserResponseMessage> exception(ResourceNotFoundException e){
		return new ResponseEntity<UserResponseMessage>(new UserResponseMessage(new UserDTO("A", "B",1, "a@a.a","123"),e.getMessage(),true,e),HttpStatus.NOT_ACCEPTABLE);
	}
	
	@ExceptionHandler(value = InvalidInputException.class)
	public ResponseEntity<UserResponseMessage> invalidInputException(InvalidInputException e){
		return new ResponseEntity<UserResponseMessage>(new UserResponseMessage(null,e.getMessage(),true,e),HttpStatus.IM_USED);
	}
}
