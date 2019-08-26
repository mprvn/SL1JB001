package com.springboot.assignment.repository;

import org.springframework.data.repository.CrudRepository;


import com.springboot.assignment.model.UserEntity;

public interface UserRepository
				extends CrudRepository<UserEntity, Long> {
	
}
