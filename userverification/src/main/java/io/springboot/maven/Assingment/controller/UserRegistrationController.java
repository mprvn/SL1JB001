/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.springboot.maven.Assingment.controller;

import io.springboot.maven.Assingment.persistence.repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

/**
 *
 * @author gino
 */
@Controller
public class UserRegistrationController {

    @Value("${spring.application.name}")
    String appName;

    @Autowired
    BookRepository repo;

    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("appName", appName);
        return "register";
    }
    
    
    @PostMapping("/saveUser")
    public String  saveUser(@ModelAttribute("SpringWeb")User student) {
        
        return "register";
    }
}
