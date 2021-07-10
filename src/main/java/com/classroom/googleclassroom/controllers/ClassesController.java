package com.classroom.googleclassroom.controllers;


import com.classroom.googleclassroom.dtos.Requests.EnrollRequest;
import com.classroom.googleclassroom.dtos.Responses.EnrollResponse;
import com.classroom.googleclassroom.dtos.Responses.ErrorResponse;
import com.classroom.googleclassroom.dtos.Responses.GetClassResponse;
import com.classroom.googleclassroom.models.GoogleClass;
import com.classroom.googleclassroom.services.DatabaseService;
import com.classroom.googleclassroom.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ClassesController {
    @Autowired
    private JwtUtil jwtTokenUtil;

    @PostMapping("/getclasses")
    public ResponseEntity<?> Classes(@RequestHeader("Authorization") String jwt) {
        String email = jwtTokenUtil.extractUsernameHeader(jwt);
        List<GoogleClass> classList = DatabaseService.getClassesOnEmail(email);
        if (classList == null) {
            return ResponseEntity.ok(new ErrorResponse("Unable To Fetch Classes"));
        }
        return ResponseEntity.ok(new GetClassResponse(classList));
    }

    @PostMapping("/enroll")
    public ResponseEntity<?> Enroll(@RequestBody EnrollRequest enrollRequest, @RequestHeader("Authorization") String jwt) {
        String email = jwtTokenUtil.extractUsernameHeader(jwt);
        int r = DatabaseService.enrollClass(email, enrollRequest.getClasscode(), enrollRequest.getType());
        if (r == -1) {
            return ResponseEntity.ok(new ErrorResponse("Already in the class"));
        }
        return ResponseEntity.ok(new EnrollResponse(r));
    }

}
