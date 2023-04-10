package com.maxfashion.app.mapper;

import com.maxfashion.app.dto.ItemDto;
import com.maxfashion.app.entity.Item;
import com.maxfashion.app.entity.ItemStock;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-30T14:30:51+0530",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 1.4.50.v20210914-1429, environment: Java 11.0.18 (Oracle Corporation)"
)
public class ItemsMapperImpl implements ItemsMapper {

    @Override
    public ItemDto convertEntityToDto(Item item) {
        if ( item == null ) {
            return null;
        }

        ItemDto itemDto = new ItemDto();

        itemDto.setItemName( item.getItemName() );
        itemDto.setUrl( item.getUrl() );
        itemDto.setPrice( item.getPrice() );
        itemDto.setDescription( item.getDescription() );
        itemDto.setBrand( item.getBrand() );
        List<ItemStock> list = item.getStock();
        if ( list != null ) {
            itemDto.setStock( new ArrayList<ItemStock>( list ) );
        }
        itemDto.setDiscount( item.getDiscount() );

        return itemDto;
    }

    @Override
    public Item convertDtoToEntity(ItemDto itemDto) {
        if ( itemDto == null ) {
            return null;
        }

        Item item = new Item();

        item.setItemName( itemDto.getItemName() );
        item.setUrl( itemDto.getUrl() );
        item.setPrice( itemDto.getPrice() );
        item.setDescription( itemDto.getDescription() );
        item.setBrand( itemDto.getBrand() );
        List<ItemStock> list = itemDto.getStock();
        if ( list != null ) {
            item.setStock( new ArrayList<ItemStock>( list ) );
        }
        item.setDiscount( itemDto.getDiscount() );

        return item;
    }
}
