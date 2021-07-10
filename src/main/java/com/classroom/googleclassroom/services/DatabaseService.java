package com.classroom.googleclassroom.services;

import com.classroom.googleclassroom.models.GoogleClass;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DatabaseService {

    static final String DB_URL = "jdbc:sqlserver://localhost:1433;databaseName=classroom;user=sa;password=the_strong_password1";

    public static String Login(String username) {
        try {
            Connection conn = DriverManager.getConnection(DB_URL);
            Statement stmt = conn.createStatement();
            String query = String.format("select * from person where email = '%s' ", username);
            ResultSet rs = stmt.executeQuery(query);
            String password = null;
            if (rs.next()) {
                password = rs.getString("password");
            }
            conn.close();
            return password;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static boolean SignUp(String username, String password) {
        try {
            Connection conn = DriverManager.getConnection(DB_URL);
            Statement stmt = conn.createStatement();
            String query = String.format("");
            int res = stmt.executeUpdate(query);
            conn.close();
            return res == 1;
        } catch (SQLException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static int enrollClass(String email, String classCode, String type) {
        try {

            Connection conn = DriverManager.getConnection(DB_URL);
            CallableStatement cs = conn.prepareCall("{call Enroll (?,?,?,?)}");
            cs.setString(1, email);
            cs.setString(2, classCode);
            cs.setString(3, type);
            cs.registerOutParameter(4, Types.INTEGER);
            cs.execute();
            int r = cs.getInt(4);
            conn.close();
            return r;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return -1;
    }

    public static List<GoogleClass> getClassesOnEmail(String email) {
        List<GoogleClass> classes = new ArrayList<>();

        try {
            Connection conn = DriverManager.getConnection(DB_URL);
            CallableStatement cs = conn.prepareCall("{call GetStudentClasses(?)}");
            cs.setString(1, email);
            cs.execute();
            //TODO UPDATE THE TEACHERNAME FROM THE DATABASE
            ResultSet rs = cs.executeQuery();
            while (rs.next()) {
                classes.add(new GoogleClass(rs.getString("classid"),
                        rs.getString("classname"),
                        rs.getString("classcode"),
                        rs.getString("meetlink"),
                        rs.getString("invitelink"), "UNKNOWN"));
            }
            conn.close();
            return classes;
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
}
