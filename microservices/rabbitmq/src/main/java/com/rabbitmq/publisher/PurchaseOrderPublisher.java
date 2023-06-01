package com.rabbitmq.publisher;

import java.util.UUID;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rabbitmq.config.MessagingConfig;
import com.rabbitmq.model.OrderStatus;
import com.rabbitmq.model.PurchaseOrder;

@RestController
@RequestMapping("/order")
public class PurchaseOrderPublisher {//publisher has dependency on template so that they can exchange// place oder and resturn message do in postmapping
	
	@Autowired
	
	private RabbitTemplate template;
	
	@Value("${ust.rabbitmq.routingkey")
	String routingkey;
	@Value("${ust.rabbitmq.queue")
	 String queueName;
	@Value("${ust.rabbitmq.exchange")
	String exchange;
	
	@PostMapping("/{customerName}")
			
			public String bookOrder(@RequestBody PurchaseOrder order,@PathVariable String customerName){
		order.setOrderId(UUID.randomUUID().toString());
		
		
		OrderStatus orderStatus=new
				OrderStatus(order,"ACCEPTED","OREDER PLACED SUCCESFULLY BY" + customerName);
		template.convertAndSend(exchange,routingkey,orderStatus);
		return "Sucesss";
	
	}

}
