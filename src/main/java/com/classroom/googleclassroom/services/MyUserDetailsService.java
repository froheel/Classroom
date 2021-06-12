package com.classroom.googleclassroom.services;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        String password = DatabaseService.Login(s);
        if(password ==null)
            throw new UsernameNotFoundException(s+" Not found");
        return new User(s,password, new ArrayList<>());
    }

}