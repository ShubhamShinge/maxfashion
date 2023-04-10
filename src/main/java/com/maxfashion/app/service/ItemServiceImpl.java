package com.maxfashion.app.service;

import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.maxfashion.app.dto.ItemDto;
import com.maxfashion.app.entity.Item;
import com.maxfashion.app.exception.DatabaseException;
import com.maxfashion.app.exception.InvalidInputException;
import com.maxfashion.app.mapper.ItemsMapper;
import com.maxfashion.app.repository.CartItemRepository;
import com.maxfashion.app.repository.CartRepository;
import com.maxfashion.app.repository.ItemRepository;

@Service
@Transactional
public class ItemServiceImpl {
	@Autowired
	ItemRepository itemRepository;
	@Autowired
	CartRepository cartRepository;
	@Autowired
	CartItemRepository cartItemRepository;
	@Autowired
	ItemsMapper itemsMapper;
	
	public ItemDto createItem(ItemDto itemDto) {
		Item item = null;
		try {
			item=itemRepository.findByItemName(itemDto.getItemName());
		}
		catch (Exception e) {
			throw new DatabaseException("Unable To Connect To Server");
		}
			if(item!=null) 
				throw new InvalidInputException("Item Already Exists With Given Name.");
			item=itemsMapper.convertDtoToEntity(itemDto);
			try {
			itemRepository.save(item);
			}
			catch (Exception e) {
				throw new DatabaseException("Unable To Connect To Server");
			}
		 
		return itemsMapper.convertEntityToDto(item);
	}
	
	public List<ItemDto> getAllItems(){
		List<Item> itemList=itemRepository.findAll();
		List<ItemDto> itemDtoList=new ArrayList<ItemDto>();
		for(Item item:itemList)
			itemDtoList.add(itemsMapper.convertEntityToDto(item));
		return itemDtoList;
	}

	public String deleteItem(String name) {
		Item item=itemRepository.findByItemName(name);
		if(item==null)
			return "Item Doesnt exists";
		else {
//		List<CartItem> cartItem=cartItemRepository.findByItem(item);
//		if(cartItem!=null) {
//			for(CartItem cartitem:cartItem) {
//				Item itemFromCart=cartitem.getItem();
//				ItemStock i=itemFromCart.getStock().stream().filter(p->p.getSize()==Size.S).findAny().get();
//				int index=item.getStock().indexOf(i);
//				 i.setQuantity(i.getQuantity()+1);
//				item.getStock().set(index,i);
//			item1.setListOfItems(cartItems);
//				itemRepository.save(itemFromCart);
//			cartRepository.deleteByListOfItemsContaining(cartitem);
//				cartItemRepository.delete(cartitem);
//		}
//		}
		cartItemRepository.deleteByItem(item);
		itemRepository.delete(item);
		return "Deleted Successfully";
		}
	}

	public ItemDto getItemByName(String itemname) {
		Item item=itemRepository.findByItemName(itemname);
		if(item==null) {
			return null;
		}
		else {
			ItemDto itemDto=itemsMapper.convertEntityToDto(item);
			return itemDto;
		}
	}

	public String updateItem(ItemDto itemDto) {
		Item item=itemRepository.findByItemName(itemDto.getItemName());
		if(item==null) {
			return "Item doesn't exist";
		}
		else {
			int id=item.getItemId();
			item=itemsMapper.convertDtoToEntity(itemDto);
			item.setItemId(id);
			itemRepository.save(item);
			return "Item updated succesfully";
		}
	}
}
