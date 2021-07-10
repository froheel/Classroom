package com.classroom.googleclassroom.models;

public class Enrolled {
    private String accountid;
    private String classid;
    private String type;

    public Enrolled(String accountid, String classid, String type) {
        this.accountid = accountid;
        this.classid = classid;
        this.type = type;
    }

    public Enrolled() {
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
