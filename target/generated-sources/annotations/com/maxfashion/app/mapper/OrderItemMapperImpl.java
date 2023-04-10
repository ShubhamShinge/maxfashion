package com.maxfashion.app.mapper;

import com.maxfashion.app.entity.CartItem;
import com.maxfashion.app.entity.OrderItem;
import javax.annotation.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-30T14:30:51+0530",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 1.4.50.v20210914-1429, environment: Java 11.0.18 (Oracle Corporation)"
)
public class OrderItemMapperImpl implements OrderItemMapper {

    @Override
    public OrderItem convertCartItemToOrderItem(CartItem cartItem) {
        if ( cartItem == null ) {
            return null;
        }

        OrderItem orderItem = new OrderItem();

        orderItem.setItem( cartItem.getItem() );
        orderItem.setSize( cartItem.getSize() );
        orderItem.setQuantity( cartItem.getQuantity() );

        return orderItem;
    }
}
