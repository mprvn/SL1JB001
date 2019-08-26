package com.springboot.controller;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.util.CaptchaGenerator;

@RestController
public class CaptchaController {
	@Autowired
	private CaptchaGenerator captchaGen;

	@RequestMapping(path = "/captcha", method = RequestMethod.GET)
	public String index(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		return Base64.getEncoder().encodeToString(captchaGen.getCaptchaImage(request).toByteArray());
	}
}