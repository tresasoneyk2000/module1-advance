package com.billingservice.resources;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("bill")
public class BillingServiceResource {
	
	@GetMapping
	public String welcome() {
		return "your  bill is heree";
	}
	

}
