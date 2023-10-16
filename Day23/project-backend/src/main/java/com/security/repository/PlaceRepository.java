package com.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.security.entity.spotEntity;



public interface PlaceRepository extends JpaRepository<spotEntity, Long> {
	

	
	    // Custom query methods can be added here if needed
	}

