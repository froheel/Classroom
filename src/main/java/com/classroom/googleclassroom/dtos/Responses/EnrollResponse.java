package com.classroom.googleclassroom.dtos.Responses;

import java.io.Serializable;

public class EnrollResponse implements Serializable {
    private final int result;
    private final String message;

    public EnrollResponse(int result, String message) {
        this.result = result;
        this.message = message;
    }

    public EnrollResponse(int result) {
        this.result = result;
//        --- 0: success , 1:already enrolled in class, 2: accountId does not exist, 3: classId does not exist
        if(result==0){
            this.message = "success";
        }else if(result ==1){
            this.message = "already enrolled in class";
        }else if(result==2){
            this.message = "accountId does not exist";
        }else if(result==3){
            this.message = "classId does not exist";
        }else{
            this.message = "unsuccessful operation";
        }
    }

    public int getResult() {
        return result;
    }

    public String getMessage() {
        return message;
    }
}
