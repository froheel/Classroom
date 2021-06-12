package com.classroom.googleclassroom.models;
import java.io.Serializable;

public class ErrorResponse implements Serializable {
    private final String error;

    public ErrorResponse(String error) {
        this.error = error;
    }

    public String getError() {
        return error;
    }
}
