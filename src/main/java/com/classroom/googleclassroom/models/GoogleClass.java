package com.classroom.googleclassroom.models;

import java.io.Serializable;

public class GoogleClass implements Serializable {
    private String classid;
    private String classname;
    private String classcode;
    private String meetlink;
    private String invitelink;
    private String teachername;

    public GoogleClass(String classid, String classname, String classcode, String meetlink, String invitelink, String teachername) {
        this.classid = classid;
        this.classname = classname;
        this.classcode = classcode;
        this.meetlink = meetlink;
        this.invitelink = invitelink;
        this.teachername = teachername;
    }

    public String getTeachername() {
        return teachername;
    }

    public void setTeachername(String teachername) {
        this.teachername = teachername;
    }

    public String getClassid() {
        return classid;
    }

    public void setClassid(String classid) {
        this.classid = classid;
    }

    public String getClassname() {
        return classname;
    }

    public void setClassname(String classname) {
        this.classname = classname;
    }

    public String getClasscode() {
        return classcode;
    }

    public void setClasscode(String classcode) {
        this.classcode = classcode;
    }

    public String getMeetlink() {
        return meetlink;
    }

    public void setMeetlink(String meetlink) {
        this.meetlink = meetlink;
    }

    public String getInvitelink() {
        return invitelink;
    }

    public void setInvitelink(String invitelink) {
        this.invitelink = invitelink;
    }
}
