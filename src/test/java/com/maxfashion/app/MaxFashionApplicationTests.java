package com.maxfashion.app;

import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.junit.Assert.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.maxfashion.app.dto.ItemDto;
import com.maxfashion.app.entity.Item;
import com.maxfashion.app.exception.DatabaseException;
import com.maxfashion.app.exception.InvalidInputException;
import com.maxfashion.app.repository.ItemRepository;
import com.maxfashion.app.service.ItemServiceImpl;

@SpringBootTest
class MaxFashionApplicationTests {
	
	@MockBean
	ItemRepository itemRepository;
	
	@Autowired
	ItemServiceImpl itemServiceImpl;
	
	@Test
	void testGetByItemNameWithValue() {
		when(itemRepository.findByItemName("Red Styled Shirt")).thenReturn(new Item(1,"Red Styled Shirt","demo.com", 0, null, 0, null, null));
		assertEquals("Red Styled Shirt", itemServiceImpl.getItemByName("Red Styled Shirt").getItemName());
	}
	
	@Test
	void testGetByItemNameWithNull() {
		when(itemRepository.findByItemName("Red Styled Shirt")).thenReturn(null);
		assertEquals(null,itemServiceImpl.getItemByName("Red Styled Shirt"));
	}
	
	@Test
	void testUpdateItemWithNull() {
		when(itemRepository.findByItemName("Red Styled Shirt")).thenReturn(null);
		assertEquals("Item doesn't exist", itemServiceImpl.updateItem(new ItemDto("Red Styled Shirt", null, 0, null, null, 0, null)));
	}
	
	@Test
	void testUpdateItemWithValue() {
		when(itemRepository.findByItemName("Red Styled Shirt")).thenReturn(new Item(1,"Red Styled Shirt", null, 0, null, 0, null, null));
		assertEquals("Item updated succesfully", itemServiceImpl.updateItem(new ItemDto("Red Styled Shirt", null, 0, null, null, 0, null)));
	}
	
	@Test
	void testDeleteItemWithValue() {
		when(itemRepository.findByItemName("Red Styled Shirt")).thenReturn(new Item(1,"Red Styled Shirt", null, 0, null, 0, null, null));
		assertEquals("Deleted Successfully", itemServiceImpl.deleteItem("Red Styled Shirt"));
	}
	
	@Test
	void testDeleteItemWithNull() {
		when(itemRepository.findByItemName("Red Styled Shirt")).thenReturn(null);
		assertEquals("Item Doesnt exists", itemServiceImpl.deleteItem("Red Styled Shirt"));
	}
	
	@Test
	void testGetAllItems() {
		when(itemRepository.findAll()).thenReturn(Stream.of(
				new Item(1, "Red TShirt", null, 0, null, 0, null, null),new Item(2, null, null, 0, null, 0, null, null)).collect(Collectors.toList()));
		assertEquals(2, itemServiceImpl.getAllItems().size());
	}
	
	@Test
	void testCreateItemWithValue() {
		when(itemRepository.findByItemName("Red Styled Shirt")).thenReturn(null);
		assertEquals("Red Styled Shirt", itemServiceImpl.createItem(new ItemDto("Red Styled Shirt", null, 0, null, null, 0, null)).getItemName());
	}
	
	@Test
	void testCreateItemWithNull() {
		when(itemRepository.findByItemName("Red Styled Shirt")).thenReturn(new Item(1,"Red Styled Shirt", null, 0, null, 0, null, null));
		assertThrows(InvalidInputException.class,()->{
			itemServiceImpl.createItem(new ItemDto("Red Styled Shirt", null, 0, null, null, 0, null));
			}
		);
		//assertThatThrownBy(()->itemServiceImpl.createItem(new ItemDto("Red Styled Shirt", null, 0, null, null, 0, null))).isInstanceOf(InvalidInputException.class);
//		String errmsg="Item Already Exists With Given Name.";
//		String expmsg=exception.getMessage();
//		System.err.println(expmsg);
//		assertTrue(errmsg.equals(expmsg));
	}
	
	@Test
	void testExceptionForSave() {
		//when(itemRepository.findByItemName("Red Styled Shirt")).thenReturn(null);
		when(itemRepository.save(new Item(1,"Red Styled Shirt", null, 0, null, 0, null, null))).thenThrow(DatabaseException.class);
		assertThrows(DatabaseException.class,()->{
			itemServiceImpl.createItem(new ItemDto("Red Styled Shirt", null, 0, null, null, 0, null));
		});
	}
	@Test
	void testExceptionForItemName() {
		when(itemRepository.findByItemName("Red Styled Shirt")).thenThrow(ArrayIndexOutOfBoundsException.class);
		assertThrows(DatabaseException.class,()->{
			itemServiceImpl.createItem(new ItemDto("Red Styled Shirt", null, 0, null, null, 0, null));
		});
	}
	
	
}
