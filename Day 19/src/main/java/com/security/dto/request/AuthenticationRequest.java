package com.security.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationRequest {
    private String email;//This line declares a private field named email. This field is used to store the email address associated with the authentication request.
    private String password;//This line declares a private field named password. This field is used to store the password associated with the authentication request.
}
