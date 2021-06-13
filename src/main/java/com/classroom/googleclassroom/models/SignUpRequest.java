package com.classroom.googleclassroom.models;

import java.io.Serializable;

public class SignUpRequest implements Serializable {
    public String username;
    public String password;
    public String confirmpassword;

    public SignUpRequest(String username, String password, String confirmpassword) {
        this.username = username;
        this.password = password;
        this.confirmpassword = confirmpassword;
    }

    public SignUpRequest() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmpassword() {
        return confirmpassword;
    }

    public void setConfirmpassword(String confirmpassword) {
        this.confirmpassword = confirmpassword;
    }
}
