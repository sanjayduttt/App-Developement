package com.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.entity.spotEntity;
import com.security.service.spotServices;



@RestController
@CrossOrigin(value="*")
@RequestMapping("/api/v1/auth")
public class spotController {
    private final spotServices placeService;

    @Autowired
    public spotController(spotServices placeService) {
        this.placeService = placeService;
    }

    @GetMapping("/places")
    public List<spotEntity> getAllPlaces() {
        return placeService.getAllPlaces();
    }

    @GetMapping("/{id}")
    public Optional<spotEntity> getPlaceById(@PathVariable Long id) {
        return placeService.getPlaceById(id);
    }

    @PostMapping("/save")
    public spotEntity createPlace(@RequestBody spotEntity place) {
        return placeService.createPlace(place);
    }
    
    @DeleteMapping("/delete/{id}")
    public boolean deletePlace(@PathVariable Long id){
    	boolean isDelete = placeService.deletePlace(id);
    	if(isDelete)
       		return true;
    	else
    		return false;
    		
    }

}
