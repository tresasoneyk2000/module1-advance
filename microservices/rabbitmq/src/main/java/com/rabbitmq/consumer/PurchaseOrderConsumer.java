package com.rabbitmq.consumer;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.rabbitmq.config.MessagingConfig;
import com.rabbitmq.model.OrderStatus;

@Component
public class PurchaseOrderConsumer {
	
	
	@Value("${ust.rabbitmq.queue}")
	 String ust_queue;
	
	@RabbitListener(queues="ust_queue")// queue is like group in whatsapp
	public void consumeMessageFromQueue(OrderStatus orderStatus) {
		System.out.println("Message recieved from queue : "+ orderStatus);
		
	}
	

}
