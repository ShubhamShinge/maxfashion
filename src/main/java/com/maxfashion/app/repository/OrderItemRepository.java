package com.maxfashion.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maxfashion.app.entity.Orders;

public interface OrderItemRepository extends JpaRepository<Orders,Integer>{

}
