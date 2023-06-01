package com.sleuthservice.resources;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;



@RestController
@RequestMapping("/service")

public class SleuthService {

	public static final Logger logger=LoggerFactory.getLogger(SleuthService.class);
	@GetMapping("/data")
	public String sendResponse() {
		logger.info("In service");
		return "from service";
	}

}
