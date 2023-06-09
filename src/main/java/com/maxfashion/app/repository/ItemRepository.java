package com.maxfashion.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.maxfashion.app.entity.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item,Integer> {
	public Item findByItemName(String name);

}
