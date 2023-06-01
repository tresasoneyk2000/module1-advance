package com.helloservice.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/service")
public class HelloService {
	//@Value("name")// valuefrom applocation properties file
	String strMessage;
	@Autowired
	Environment environment;//reference to properties file// enivronment is just a class used to get port number of given micrservice
	
//	@GetMapping
//	public String welcome() {
//		String port=environment.getProperty("server.port");
//		return "programming microservices@"+port;
//	}
	@GetMapping("status")
	public String status() {
		return "up and running->>";
	}
	

}
