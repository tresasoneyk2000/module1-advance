package com.bookdocker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController// docker with boot is docarize
public class Welcome {
	@GetMapping("/greet")
	public String message()
	{
		return "Ola! Como Sava";
	}
}
