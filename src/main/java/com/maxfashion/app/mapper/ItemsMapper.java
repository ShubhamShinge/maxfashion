package com.maxfashion.app.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.maxfashion.app.dto.ItemDto;
import com.maxfashion.app.entity.Item;

@Mapper
public interface ItemsMapper {
	@Mapping(target="itemName",source="itemName")
	@Mapping(target="url",source="url")
	@Mapping(target="price",source="price")
	@Mapping(target="description",source="description")
	@Mapping(target="brand",source="brand")
	@Mapping(target="stock",source="stock")
	ItemDto convertEntityToDto(Item item);
	
	@Mapping(target="itemName",source="itemName")
	@Mapping(target="url",source="url")
	@Mapping(target="price",source="price")
	@Mapping(target="description",source="description")
	@Mapping(target="brand",source="brand")
	@Mapping(target="stock",source="stock")
	Item convertDtoToEntity(ItemDto itemDto);
}
