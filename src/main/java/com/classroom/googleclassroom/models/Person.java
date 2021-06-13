package com.classroom.googleclassroom.models;

import java.io.Serializable;

public class Person implements Serializable {
    private String accountid;
    private String name;
    private String dateofregister;
    private String dob;
    private String email;
    private String profile;
    private String password;
    private String bio;

    public Person(String accountid, String name, String dateofregister, String dob, String email, String profile, String password, String bio) {
        this.accountid = accountid;
        this.name = name;
        this.dateofregister = dateofregister;
        this.dob = dob;
        this.email = email;
        this.profile = profile;
        this.password = password;
        this.bio = bio;
    }

    public Person(){

    }

    public String getAccountid() {
        return accountid;
    }

    public void setAccountid(String accountid) {
        this.accountid = accountid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateofregister() {
        return dateofregister;
    }

    public void setDateofregister(String dateofregister) {
        this.dateofregister = dateofregister;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }
}






