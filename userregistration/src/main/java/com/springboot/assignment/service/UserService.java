package com.springboot.assignment.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.assignment.exception.RecordNotFoundException;
import com.springboot.assignment.model.UserEntity;
import com.springboot.assignment.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<UserEntity> getAllEmployees()
	{
		List<UserEntity> result = (List<UserEntity>) userRepository.findAll();
		
		if(result.size() > 0) {
			return result;
		} else {
			return new ArrayList<UserEntity>();
		}
	}
	
	public UserEntity getEmployeeById(Long id) throws RecordNotFoundException 
	{
		Optional<UserEntity> employee = userRepository.findById(id);
		
		if(employee.isPresent()) {
			return employee.get();
		} else {
			throw new RecordNotFoundException("No employee record exist for given id");
		}
	}
	
	public UserEntity createOrUpdateEmployee(UserEntity entity) 
	{
		if(entity.getId()  == null) 
		{
			entity = userRepository.save(entity);
			
			return entity;
		} 
		else 
		{
			Optional<UserEntity> employee = userRepository.findById(entity.getId());
			
			if(employee.isPresent()) 
			{
				UserEntity newEntity = employee.get();
				newEntity.setEmail(entity.getEmail());
				newEntity.setName(entity.getName());
				newEntity.setUserName(entity.getUserName());
				newEntity.setPassword(entity.getPassword());

				newEntity = userRepository.save(newEntity);
				
				return newEntity;
			} else {
				entity = userRepository.save(entity);
				
				return entity;
			}
		}
	} 
	
	public void deleteEmployeeById(Long id) throws RecordNotFoundException 
	{
		Optional<UserEntity> employee = userRepository.findById(id);
		
		if(employee.isPresent()) 
		{
			userRepository.deleteById(id);
		} else {
			throw new RecordNotFoundException("No user record exist for given id");
		}
	} 

}
