package com.maxfashion.app.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.maxfashion.app.entity.Cart;
import com.maxfashion.app.entity.CartItem;
import com.maxfashion.app.entity.User;

@Repository
public interface CartRepository extends JpaRepository<Cart,Integer>{
	public Cart findByUser(User user);
	public List<Cart> deleteByListOfItemsContaining(CartItem item);
}
