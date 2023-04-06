package com.example.testService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.plaf.synth.SynthGraphicsUtils;

@Service
public class UserService{
    @Autowired
    private UserMapper userMapper;

    public boolean checkUser(String username, String password) {
        System.out.println(username+password);
        try {
            User user = userMapper.findByUsernameAndPassword(username, password);
            System.out.println(user);
            return user != null;
        }catch (Exception e){
            return false;
        }
    }
}

