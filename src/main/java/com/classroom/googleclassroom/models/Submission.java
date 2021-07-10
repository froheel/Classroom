package com.classroom.googleclassroom.models;

public class Submission {
    private String accountid;
    private String postid;
    private String document;
    private String submission;

    public Submission(String accountid, String postid, String document, String submission) {
        this.accountid = accountid;
        this.postid = postid;
        this.document = document;
        this.submission = submission;
    }

    public Submission() {
    }

    public String getAccountid() {
        return accountid;
    }

    public void setAccountid(String accountid) {
        this.accountid = accountid;
    }

    public String getPostid() {
        return postid;
    }

    public void setPostid(String postid) {
        this.postid = postid;
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public String getSubmission() {
        return submission;
    }

    public void setSubmission(String submission) {
        this.submission = submission;
    }
}
