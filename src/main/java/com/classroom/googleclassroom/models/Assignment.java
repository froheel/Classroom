package com.classroom.googleclassroom.models;

public class Assignment {
    private String postid;
    private String deadline;
    private String marks;
    private String attachmant;

    public Assignment(String postid, String deadline, String marks, String attachmant) {
        this.postid = postid;
        this.deadline = deadline;
        this.marks = marks;
        this.attachmant = attachmant;
    }

    public Assignment() {
    }

    public String getPostid() {
        return postid;
    }

    public void setPostid(String postid) {
        this.postid = postid;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getMarks() {
        return marks;
    }

    public void setMarks(String marks) {
        this.marks = marks;
    }

    public String getAttachmant() {
        return attachmant;
    }

    public void setAttachmant(String attachmant) {
        this.attachmant = attachmant;
    }
}
