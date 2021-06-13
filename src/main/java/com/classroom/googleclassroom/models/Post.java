package com.classroom.googleclassroom.models;

import java.io.Serializable;

public class Post implements Serializable {
    private String postid;
    private String accountid;
    private String classid;
    private String content;
    private String topic;
    private String type;

    public Post(String postid, String accountid, String classid, String content, String topic, String type) {
        this.postid = postid;
        this.accountid = accountid;
        this.classid = classid;
        this.content = content;
        this.topic = topic;
        this.type = type;
    }

    public Post() {
    }

    public String getPostid() {
        return postid;
    }

    public void setPostid(String postid) {
        this.postid = postid;
    }

    public String getAccountid() {
        return accountid;
    }

    public void setAccountid(String accountid) {
        this.accountid = accountid;
    }

    public String getClassid() {
        return classid;
    }

    public void setClassid(String classid) {
        this.classid = classid;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
