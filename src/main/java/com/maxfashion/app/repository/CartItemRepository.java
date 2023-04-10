package com.maxfashion.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.maxfashion.app.entity.CartItem;
import com.maxfashion.app.entity.Item;
import com.maxfashion.app.entity.User;
import com.maxfashion.app.enums.Size;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem,Integer> {
	public CartItem findByItemAndUserAndSize(Item item,User user,Size size);
	public List<CartItem> findByUser(User user);
	public List<CartItem> findByItem(Item item);
	public void deleteByItem(Item item);
}
