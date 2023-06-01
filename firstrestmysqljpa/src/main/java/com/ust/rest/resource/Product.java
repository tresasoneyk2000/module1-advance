package com.ust.rest.resource;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Product {
	@Id
@GeneratedValue(strategy=GenerationType.AUTO)// for this strategy to work first we have to create a table in mysql database and explicitly specify the autoincrement(ai)  as checked for primary key column.
//	and in application.properties file "spring.jpa.hibernate.ddl-auto=update"this should not be set if it is set it should have value as update
//		
	// auto is the default generation type or strategy.Genration type is strategy which jpa should use and follow to generate primary key values
	private long productId;// when the strategy is not specified jpa uses auto strategy.when the under line database is mysql genrationtype.auto means the jpa will create a hybernate sequence in the database for generation of primary keys
	private String name;
	private String description;
	private BigDecimal price;
	private int qty;
	
	
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public long getProductId() {
		return productId;
	}
	public void setProductId(long productId) {
		this.productId = productId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	

//	Hibernate: select next_val as id_val from hibernate_sequence for update
//	Hibernate: update hibernate_sequence set next_val= ? where next_val=?
//	Hibernate: insert into product (description, name, price, qty, product_id) values (?, ?, ?, ?, ?)

}
