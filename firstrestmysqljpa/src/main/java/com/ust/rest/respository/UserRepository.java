package com.ust.rest.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ust.rest.resource.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
	// one repository can persist only one resource

}
