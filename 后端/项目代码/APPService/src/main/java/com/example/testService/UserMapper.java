package com.example.testService;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {
    @Select("SELECT * FROM users WHERE user_name = #{username} AND user_pwd = #{password}")
    User findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}

