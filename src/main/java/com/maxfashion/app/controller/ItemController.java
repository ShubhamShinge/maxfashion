package com.maxfashion.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.maxfashion.app.dto.ItemDto;
import com.maxfashion.app.responsemessage.UserResponseMessage;
import com.maxfashion.app.service.CartServiceImpl;
import com.maxfashion.app.service.ItemServiceImpl;

@RestController
@RequestMapping("item")
@CrossOrigin("*")
public class ItemController {
	
		@Autowired
		ItemServiceImpl itemServiceImpl;
		
		@Autowired
		CartServiceImpl cartServiceImpl;
		
		//add an item -> admin will add details in form .
		@PostMapping("additem")		//http://localhost:9090/item/additem
		public ResponseEntity<?> saveItem(@RequestBody ItemDto itemDto){
			itemServiceImpl.createItem(itemDto);
			return new ResponseEntity<UserResponseMessage>(new UserResponseMessage(),HttpStatus.OK);
			
		}
		
		//get all items
		@GetMapping("getallitems")		
		public List<ItemDto> getAllItems(){
			return itemServiceImpl.getAllItems();
		}
		//get item  by name.
		@GetMapping("getitem/{itemname}")		//http://localhost:9090/item/getitem/grey Styled Shirt
		public ItemDto getItemByName(@PathVariable String itemname) {
			return itemServiceImpl.getItemByName(itemname);
		}
		
		//update item
		@PutMapping("updateitem")		//http://localhost:9090/item/updateitem
		public String updateItem(@RequestBody ItemDto itemDto) {
			System.err.println(itemDto);
			return itemServiceImpl.updateItem(itemDto);
		}
		//delete item.
		@DeleteMapping("deleteitem/{itemname}")		//http://localhost:9090/item/deleteitem/yellow5 Styled Shirt
		public String deleteItem(@PathVariable String itemname) {
			return itemServiceImpl.deleteItem(itemname);
		}	
		
}
