package com.springboot.assignment.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.springboot.assignment.model.User;


@Controller
public class UserRegistrationController {
	
	
	 @GetMapping("/")
	    public String register(Model model) {
	        return "register";
	    }
	    
	    
	/*
	 * @RequestMapping("/saveUser") public String
	 * saveUser(@ModelAttribute("SpringWeb")User user) {
	 * 
	 * System.out.println(user.getName()); System.out.println(user.getEmail());
	 * System.out.println(user.getUserName()); return "saveUser"; }
	 * 
	 * @RequestMapping("/error") public String
	 * error(@ModelAttribute("SpringWeb")User user) {
	 * 
	 * System.out.println(user.getName()); System.out.println(user.getEmail());
	 * System.out.println(user.getUserName()); return "saveUser"; }
	 */

}
