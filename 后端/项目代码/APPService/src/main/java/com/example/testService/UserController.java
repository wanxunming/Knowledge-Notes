package com.example.testService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        if (userService.checkUser(user.getUser_name(), user.getUser_pwd())) {
            return "Login success";
        } else {
            return "Login failed";
        }
    }
}

