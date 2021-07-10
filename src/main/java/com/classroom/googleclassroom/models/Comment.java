package com.classroom.googleclassroom.models;

public class Comment {
    private String commentid;
    private String postid;
    private String accountid;
    private String content;
    private String time;

    public Comment(String commentid, String postid, String accountid, String content, String time) {
        this.commentid = commentid;
        this.postid = postid;
        this.accountid = accountid;
        this.content = content;
        this.time = time;
    }

    public Comment() {
    }

    public String getCommentid() {
        return commentid;
    }

    public void setCommentid(String commentid) {
        this.commentid = commentid;
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
