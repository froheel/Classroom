package com.classroom.googleclassroom.dtos.Responses;

import com.classroom.googleclassroom.models.GoogleClass;

import java.io.Serializable;
import java.util.List;

public class GetClassResponse implements Serializable {
    private final List<GoogleClass> classes;

    public GetClassResponse(List<GoogleClass> classList) {
        this.classes = classList;
    }

    public List<GoogleClass> getClassList() {
        return classes;
    }
}
