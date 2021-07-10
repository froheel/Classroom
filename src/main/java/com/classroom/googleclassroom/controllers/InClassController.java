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

import javax.websocket.server.PathParam;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class InClassController {

    @Autowired
    private JwtUtil jwtTokenUtil;

    @PostMapping("/inclass/:id")
    public ResponseEntity<?> Classes(@RequestHeader("Authorization") String jwt, @PathParam("id") int id) {
        String email = jwtTokenUtil.extractUsernameHeader(jwt);
        if (email == null) {
            return ResponseEntity.ok(new ErrorResponse("UnAuthorized Class Access"));
        }
        List<GoogleClass> classList = DatabaseService.getClassesOnEmail(email);
        if (classList == null) {
            return ResponseEntity.ok(new ErrorResponse("Unable To Fetch Classes"));
        }
        return ResponseEntity.ok(new GetClassResponse(classList));
    }


}
