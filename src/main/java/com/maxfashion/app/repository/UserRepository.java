package com.maxfashion.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.maxfashion.app.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

	User findByEmail(String email);

}
