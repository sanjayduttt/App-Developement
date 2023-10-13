package com.security.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.entity.spotEntity;
import com.security.repository.PlaceRepository;

@Service
public class spotServices {
    private final PlaceRepository placeRepository;

    @Autowired
    public spotServices(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }

    public List<spotEntity> getAllPlaces() {
        return placeRepository.findAll();
    }

    public Optional<spotEntity> getPlaceById(Long id) {
        return placeRepository.findById(id);
    }

    public spotEntity createPlace(spotEntity place) {
        return placeRepository.save(place);
    }

	public boolean deletePlace(Long id) {
		placeRepository.deleteById(id);
		return true;
	}

    // Add more methods as needed
}
