package com.rabbitmq.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessagingConfig {
//	public static final String QUEUE="ust_queue";
//	public static final String EXCHANGE="ust_exchange";
//	public static final String ROUTING_KEY="ust_routingKey"; 
	
	@Value("${ust.rabbitmq.routingkey}")
	String routingkey;
	@Value("${ust.rabbitmq.queue}")
	 String queue;
	@Value("${ust.rabbitmq.exchange}")
	String exchange;
	
	@Bean
	public Queue queue() {
		return new Queue(queue);
	}
	
	@Bean
	public TopicExchange exchange() {
		return new  TopicExchange(exchange);
		
	}
	
	@Bean
	public Binding binding(Queue queue,TopicExchange exchange) {
		return BindingBuilder.bind(queue).to(exchange).with(routingkey);
	}
	@Bean
	public MessageConverter converter() {
		return new Jackson2JsonMessageConverter();
	}
	
	@Bean
	public AmqpTemplate template(ConnectionFactory connectionFactory) {// @Bean is java configuration  it is in container. connectionfactory is autoinjected
		
		final RabbitTemplate template=
				new RabbitTemplate(connectionFactory);
		template.setMessageConverter(converter());
		return template;
		
	}

}
