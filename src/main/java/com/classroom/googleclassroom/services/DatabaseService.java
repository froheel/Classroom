package com.classroom.googleclassroom.services;

import java.sql.*;

public class DatabaseService {

    static final String DB_URL = "jdbc:sqlserver://35.247.185.25:1433;databaseName=classroom;user=root;password=pin7766@;";


    public static String Login(String username) {
        try {
            Connection conn = DriverManager.getConnection(DB_URL);
            Statement stmt = conn.createStatement();
            String query = String.format("select * from person where email = '%s' ", username);
            ResultSet rs = stmt.executeQuery(query);
            if (rs.next()){
               return rs.getString("password");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
}
