package com.security.service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.security.dto.request.AuthenticationRequest;
import com.security.dto.request.RegisterRequest;
import com.security.dto.response.AuthenticationResponse;
import com.security.entity.Role;
import com.security.entity.User;
import com.security.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;// A repository for interacting with user data in the database
    private final PasswordEncoder passwordEncoder;// A Spring Security component used to encode passwords.
    private final JwtService jwtService;// A service for handling JWT (JSON Web Token) generation and validation
    private final AuthenticationManager authenticationManager;//an object responsible for user authentication provided by Spring Security.

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User
                .builder()
                .firstName(request.getFirstName())
                .email(request.getEmail())
                .lastName(request.getLastName())
                .phoneNo(request.getPhoneNo())      //These lines create a User object using a builder pattern, setting
                                               //various user properties from the RegisterRequest object and encoding the password 
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);//This line saves the newly created user to the database using the userRepository.
        var jwtToken = jwtService.generateToken(user);//This line generates a JWT token for the registered user using the jwtService.
        return AuthenticationResponse.builder()
        		.token(jwtToken)//This line constructs and returns an AuthenticationResponse object containing the JWT token
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
    
	public Optional<User> getDetailsId(String email)
	{
		return userRepository.findById(email);
	}

}
