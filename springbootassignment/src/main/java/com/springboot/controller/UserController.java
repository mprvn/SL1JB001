package com.springboot.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.springboot.model.User;
import com.springboot.service.UserService;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value={"/", "/login"}, method = RequestMethod.GET)
    public ModelAndView login(){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }


    @RequestMapping(value="/registration", method = RequestMethod.GET)
    public ModelAndView registration(){
        ModelAndView modelAndView = new ModelAndView();
        User user = new User();
        modelAndView.addObject("user", user);
        modelAndView.setViewName("registration");
        return modelAndView;
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public ModelAndView createNewUser(@Valid User user, HttpSession session, HttpServletRequest request, BindingResult bindingResult) {
        ModelAndView modelAndView = new ModelAndView();
        User userExists = userService.findUserByEmail(user.getEmail());
        String captcha = session.getAttribute("captcha_security").toString();
		String verifyCaptcha = user.getCaptcha();
		String pass = user.getPassword();
		String rePass = user.getRePassword();
		
		if (!captcha.equals(verifyCaptcha)) {
			bindingResult
            .rejectValue("captcha", "error.captcha",
                    "Captcha Invalid");			
			modelAndView.setViewName("registration");
		}
        if (userExists != null) {
        	
            bindingResult
                    .rejectValue("email", "error.user",
                            "There is already a user registered with the email provided");
        }
        if(!pass.equalsIgnoreCase(rePass)) {
        	
        	bindingResult
            .rejectValue("rePassword", "error.rePassword",
                    "Oops! The password you entered don't match. Try again ");
        }
        if (bindingResult.hasErrors()) {
            modelAndView.setViewName("registration");
        } else {
            userService.saveUser(user);
            modelAndView.addObject("successMessage", "User has been registered successfully, Click on Home button to login");
            modelAndView.addObject("user", new User());
            modelAndView.addObject("login", true);
            modelAndView.setViewName("registration");

        }
        return modelAndView;
    }

    @RequestMapping(value="/admin/adminHome", method = RequestMethod.GET)
    public ModelAndView home(){
        ModelAndView modelAndView = new ModelAndView();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByUserName(auth.getName());
        modelAndView.addObject("userName", "Welcome " + user.getName() + " " + user.getLastName() + " (" + user.getEmail() + ")");
        modelAndView.addObject("adminMessage","This Page is available to Users with Admin Role");
        modelAndView.setViewName("admin/adminHome");
        return modelAndView;
    }
    

    @RequestMapping(value="/user/tutorials", method = RequestMethod.GET)
    public ModelAndView tutorial(){
        ModelAndView modelAndView = new ModelAndView();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByUserName(auth.getName());
        modelAndView.addObject("userName", "Welcome " + user.getName() + " " + user.getLastName() + " (" + user.getEmail() + ")");
        modelAndView.addObject("adminMessage","This Page is available to Users with logged in users ");
        modelAndView.setViewName("user/tutorials");
        return modelAndView;
    }
    

    @RequestMapping(value="/user/userHome", method = RequestMethod.GET)
    public ModelAndView user(){
        ModelAndView modelAndView = new ModelAndView();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByUserName(auth.getName());
        modelAndView.addObject("userName", "Welcome " + user.getName() + " " + user.getLastName() + " (" + user.getEmail() + ")");
        modelAndView.addObject("userMessage","This Page is available to Users with User Role");
        modelAndView.setViewName("user/userHome");
        return modelAndView;
    }

}
