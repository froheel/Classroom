package com.classroom.googleclassroom.controllers;

import com.classroom.googleclassroom.dtos.Requests.AuthenticationRequest;
import com.classroom.googleclassroom.dtos.Responses.AuthenticationResponse;
import com.classroom.googleclassroom.dtos.Responses.ErrorResponse;
import com.classroom.googleclassroom.dtos.Requests.SignUpRequest;
import com.classroom.googleclassroom.services.DatabaseService;
import com.classroom.googleclassroom.services.MyUserDetailsService;
import com.classroom.googleclassroom.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public ResponseEntity<?> signUp(@RequestBody SignUpRequest signUpRequest) {
        //TODO add the data to database
        if (!DatabaseService.SignUp(signUpRequest.getUsername(), signUpRequest.getPassword())) {
            return ResponseEntity.ok(new ErrorResponse("Data Entry Failed"));
        }
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signUpRequest.getUsername(), signUpRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            return ResponseEntity.ok(new ErrorResponse("Login Failed"));
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(signUpRequest.getUsername());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        //todo
        final String name = "";
        final String img = "";
        final String email = userDetails.getUsername();
        return ResponseEntity.ok(new AuthenticationResponse(jwt,name,img,email));
    }
        @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            return ResponseEntity.ok(new ErrorResponse("Login Failed"));
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        //todo
        final String name = "";
        final String img = "";
        final String email = userDetails.getUsername();
        return ResponseEntity.ok(new AuthenticationResponse(jwt,name,img,email));
    }

}
