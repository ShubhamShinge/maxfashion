package com.maxfashion.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.maxfashion.app.mapper.AddressMapper;
import com.maxfashion.app.mapper.AddressMapperImpl;
import com.maxfashion.app.mapper.ItemsMapper;
import com.maxfashion.app.mapper.ItemsMapperImpl;
import com.maxfashion.app.mapper.ItemMapper;
import com.maxfashion.app.mapper.ItemMapperImpl;
import com.maxfashion.app.mapper.OrderItemMapper;
import com.maxfashion.app.mapper.OrderItemMapperImpl;
import com.maxfashion.app.mapper.UserMapper;
import com.maxfashion.app.mapper.UserMapperImpl;

@SpringBootApplication
public class MaxFashionApplication {

	public static void main(String[] args) {
		SpringApplication.run(MaxFashionApplication.class, args);
	}
	
	@Bean
	public UserMapper getUserMapper() {
		return new UserMapperImpl();
	}
	
	@Bean
	public ItemMapper geItemMapper() {
		return new ItemMapperImpl();
	}
	
	@Bean
	public OrderItemMapper getOrderItemMapper() {
		return new OrderItemMapperImpl();
	}
	
	@Bean
	public AddressMapper getAddressMapper() {
		return new AddressMapperImpl();
	}
	
	@Bean
	public ItemsMapper getItemConverter() {
		return new ItemsMapperImpl();
	}
}
