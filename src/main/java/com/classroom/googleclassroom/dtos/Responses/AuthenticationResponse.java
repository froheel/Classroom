package com.classroom.googleclassroom.dtos.Responses;

import java.io.Serializable;

public class AuthenticationResponse implements Serializable {

    private final String jwt;
    private final String name;
    private final String img;
    private final String email;

    public AuthenticationResponse(String jwt, String name, String img, String email) {
        this.jwt = jwt;
        this.name = name;
        this.img = img;
        this.email = email;
    }

    public String getJwt() {
        return jwt;
    }

    public String getName() {
        return name;
    }

    public String getImg() {
        return img;
    }

    public String getEmail() {
        return email;
    }
}
