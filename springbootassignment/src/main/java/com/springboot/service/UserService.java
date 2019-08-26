package com.springboot.service;

import com.springboot.model.User;

public interface UserService {

    public User findUserByEmail(String email) ;
    public User findUserByUserName(String userName);
    public User saveUser(User user);
}
