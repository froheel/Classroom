package com.classroom.googleclassroom.models;

import java.io.Serializable;

public class Resource implements Serializable {
    private String postid;
    private String resource;

    public Resource(String postid, String resource) {
        this.postid = postid;
        this.resource = resource;
    }

    public Resource() {
    }

    public String getPostid() {
        return postid;
    }

    public void setPostid(String postid) {
        this.postid = postid;
    }

    public String getResource() {
        return resource;
    }

    public void setResource(String resource) {
        this.resource = resource;
    }
}
