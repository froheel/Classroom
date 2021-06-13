package com.classroom.googleclassroom.controllers;


import com.classroom.googleclassroom.Responses.ErrorResponse;
import com.classroom.googleclassroom.Responses.GetClassResponse;
import com.classroom.googleclassroom.models.GoogleClass;
import com.classroom.googleclassroom.services.DatabaseService;
import com.classroom.googleclassroom.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ClassesController {
    @Autowired
    private JwtUtil jwtTokenUtil;

    @PostMapping("/getclasses")
    public ResponseEntity<?> Classes(@RequestHeader("Authorization") String jwt) {
        String email = jwtTokenUtil.extractUsernameHeader(jwt);
        List<GoogleClass> classList =  DatabaseService.getClassesOnEmail(email);
        if (classList==null){
            return ResponseEntity.ok(new ErrorResponse("Unable To Fetch Classes"));
        }
        return ResponseEntity.ok(new GetClassResponse(classList));
    }

}
