package com.maxfashion.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.maxfashion.app.entity.Address;
import com.maxfashion.app.entity.User;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {
	public List<Address> findByUser(User user);
}
