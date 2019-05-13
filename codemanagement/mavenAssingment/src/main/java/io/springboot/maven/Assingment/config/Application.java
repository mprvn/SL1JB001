package io.springboot.maven.Assingment.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories("io.springboot.maven.Assingment.persistence.repo")
@EntityScan("io.springboot.maven.Assingment.persistence.model")
@SpringBootApplication(scanBasePackages = {"io.springboot.maven.Assingment.controller"})
public class Application  extends SpringBootServletInitializer {

  /*  public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }*/
	
	    public static void main(String[] args) {
	        SpringApplication.run(Application.class, args);
	    }

	    @Override
	    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
	        return builder.sources(Application.class);
	    }

}
