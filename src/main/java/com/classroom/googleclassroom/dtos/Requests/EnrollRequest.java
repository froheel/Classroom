package com.classroom.googleclassroom.dtos.Requests;

import java.io.Serializable;

public class EnrollRequest implements Serializable {
    private String classcode;
    private String type;

    public EnrollRequest(String classcode, String type) {
        this.classcode = classcode;
        this.type = type;
    }

    public EnrollRequest() {

    }

    public String getClasscode() {
        return classcode;
    }

    public void setClasscode(String classcode) {
        this.classcode = classcode;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
