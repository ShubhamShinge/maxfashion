package com.maxfashion.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.maxfashion.app.entity.ItemStock;
import com.maxfashion.app.enums.Size;

@Repository
public interface StockRepository extends JpaRepository<ItemStock,Integer>{
	public ItemStock findBySize(Size size);

}
