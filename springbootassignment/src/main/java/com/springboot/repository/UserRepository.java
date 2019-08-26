package com.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    public User findByEmail(String email);
    public User findByUserName(String userName);
}
