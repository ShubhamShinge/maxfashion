package com.maxfashion.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.maxfashion.app.entity.Orders;

@Repository
public interface OrderuserRepository extends JpaRepository<Orders,Integer>{

}
